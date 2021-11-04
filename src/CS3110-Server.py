from flask_cors import CORS
from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash, jsonify
from datetime import date, datetime
import os

import pandas as pd
import json
from json import dumps
import time

import subprocess
import sys

folder=os.path.dirname(os.path.abspath(__file__)).split('/')
global HOME_DIR
HOME_DIR="/".join(folder)
PROC_IDFILE=HOME_DIR+'/.pidf'
LOGFILE=HOME_DIR+'/'+'CS3110-server.log'

print ("the logfile path  is :", LOGFILE)

try:
    pfile=open(PROC_IDFILE, "w")
    pfile.write(str(os.getpid()))
    pfile.close()

except:
    print ("Can't record CS3110 server process id in file. Please check file structure permission")
    print (sys.exc_info())

try:
    pfile=open(LOGFILE, "a")
except:
    print ("Can't open CS3110-server log file" + LOGFILE + ", please  check file structure permission")
    print (sys.exc_info())


controller_host = '0.0.0.0'
controller_version = 1.0

app = Flask(__name__)
CORS(app)
@app.route('/')
@app.route('/testService', methods = ['GET','POST'])
def index():
    return "Test Succeeded and Service is up and running"

@app.route('/')
@app.route("/CS3110-server/login", methods = ['POST','GET'])
def process_data():
    print ("start processing json data")
    print ("--------------------------")

    try:
            print ("in login")
            part = 1
            # if data is sending to server in json format, do the following:

            pfile.write("Start processing json data" + str(request.is_json))   # --- this is for logging and debugging purpose
            records = request.get_json()
            print(records)

            # use current timestamp to make a generate filename
            datetime_now = datetime.now()
            datetime_string = datetime_now.strftime("%Y%m%d%H%M%S%f")  # TODO uncommented when table definition changed
            input_filename = HOME_DIR + '/' + "clientInput_" + datetime_string
            # input_filename = "clientInput_" + datetime_string
            print ("receiving browser data in file", input_filename)
            pfile.write("receiving browser data in file" + input_filename)

            jsonInputfhandle = open (input_filename, "w")
            # jsonInputfhandle.write(str(records))
            jsonInputfhandle.write(json.dumps(records))
            jsonInputfhandle.close()

            part = 2

            # NOW, here is the place to call ocaml program to  insert new data to Mongodb
            print('writing to ' + input_filename)
            cmd = "./login.out " + input_filename
            retVal=(subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()[0].decode("utf-8").split()[0])

            print ("retval after calling cmd " + cmd + " is: " + retVal )

            jsonOutfhandle = open(input_filename, "r")
            s = jsonOutfhandle.read()
            data = json.loads(json.dumps(s))
            print(data)
            #data = json.loads(json.dump(jsonOutfhandle))
            jsonOutfhandle.close()
            response = app.response_class(response = json.dumps(data ),
                                          status = 200,
                                          mimetype='application/json'
                                         )

            cmd = "rm " + input_filename
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            # response.header['Access-Control-Allow-Origin'] = '*'
            return response

    except:
            print (sys.exc_info())
            if part == 1:
                message = "can't get the user input"
            elif part == 2:
                message = "can't retrieve impression count"

            pfile(sys.exc_info())
            pfile(message )

            return message



@app.route('/')
@app.route("/CS3110-server/signup", methods = ['GET', 'POST'])
def process_report():
    print ("request: signup")
    try:
        pfile=open(LOGFILE, "a")
    except:
        print ("Can't open CS3110-server log file" + LOGFILE + ", please  check file structure permission")
    try:
            print ("hello, in signup")

            # if data sent in json format:
            pfile.write("Start processing json data" + str(request.is_json))   # --- this is for logging and debugging purpose
            records = request.get_json()
            pfile.write(str(records))
            # use the timestamp to make a filename generically
            datetime_now = datetime.now()
            datetime_string = datetime_now.strftime("%Y%m%d%H%M%S%f")  # TODO uncommented when table definition changed
            input_filename = HOME_DIR + '/' + "clientInput_" + datetime_string
            print ("receiving browser data in file", input_filename)
            pfile.write("receiving browser data in file" + input_filename)
            print('date = \n\n')
            print(records)
            jsonInputfhandle = open (input_filename, "w")
            jsonInputfhandle.write(json.dumps(records))
            jsonInputfhandle.close()

            # parse the keys from the json format
            response = "Retrieving report data..."

            # here is the place to call ocaml program
            cmd = "./signup.out " + input_filename # ---- search is to tell ocalprogram to call search function inside the ocalm program the rest list arguments are the input data value
            # print ("the cmd is", cmd)
            retVal=(subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()[0].decode("utf-8").split()[0])
            print('retVal = ' + retVal)
            # just use the same name to write retrieved data back

            jsonOutfhandle = open(input_filename, "r")
            s = jsonOutfhandle.read()
            data = json.loads(json.dumps(s))
            print(data)
            #data = json.loads(json.dump(jsonOutfhandle))
            jsonOutfhandle.close()
            response = app.response_class(response = json.dumps(data ),
                                          status = 200,
                                          mimetype='application/json'
                                         )

            cmd = "rm " + input_filename
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            # response.headers.add('Access-Control-Allow-Origin', '*')
            # response.header['Access-Control-Allow-Origin'] = '*'
            return response

    except:
            pfile("can't get the user input")
            message = "can't get the user input"

            return message

if __name__ == '__main__':
    print ("start to run CS3110-server.py")
    app.run( threaded = True, host=controller_host)
