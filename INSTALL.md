#!/bin/sh
opam switch create Mongo ocaml-base-compiler.4.05.0
opam switch Mongo
brew install libevent
opam pin opium 0.16.0
opam install camlp4
opam install mongo
brew tap mongodb/brew
brew install mongodb-community@5.0

# TODO make sure if you need to execute a command after new installation
# eval $(opam env)

brew services start mongodb-community@5.0

# test if MongoDB is started
# below logic will make sure mongod is running

if [ -z "`ps -ef | grep mongod`" ]; then
echo "Something wrong, MongoDB is not up and running"
exit 1
else
echo "MongoDB is up and running"
fi
# Terminate program
brew services stop mongodb-community@5.0
