# O-Uni

A bulletin board for college students to interact with each other. 

This is a fall 2021 Cornell CS-3110 final project.

Team members: Aaron Ye, Daniel Zhou, Kelly Chen, Yueming Liu

## System Requirements

- Ocaml 4.05.0
- dune 1.6.x
- Node.js 10.x.x
- npm 6.x.x
- opam 2.0.5
- mongo 0.67.2
- camlp4 4.05
- opium 0.16.0

## Installation for Windows (WSL)

As of right now, the frontend, the backend, and the server have yet to be integrated. Instructions on running independent demos of them are as follows.

### Frontend

Install Node.js and npm.

```
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
```

To run the frontend, cd into ./frontend and run `npm start`

### Backend and server

Create opam switch and install necessary packages. Run `eval $(opam evn)` when prompted. 

```
$ opam switch create <name> ocaml-base-compiler.4.05.0
$ sudo apt-get update
$ sudo apt-get install libevent-dev 
$ opam pin opium 0.16.0
$ opam install camlp4
$ opam install mongo
```

To demo the backend:
TODO

## Installation for Mac

### Frontend

TODO

### Backend and server

Create opam switch and install necessary packages. Run `eval $(opam evn)` when prompted. 

```
$ opam switch create <name> ocaml-base-compiler.4.05.0
$ brew install libevent
$ opam pin opium 0.16.0
$ opam install camlp4
$ opam install mongo
```
To demo the backend: 
TODO