#!/bin/sh
brew services start mongodb-community@5.0
ocamlfind ocamlc -linkpkg -package mongo,yojson -thread content.mli
ocamlfind ocamlc -linkpkg -package mongo,yojson -thread content.ml
ocamlfind ocamlc str.cma content.cmo -linkpkg -package mongo,yojson -thread user.mli
ocamlfind ocamlc str.cma content.cmo -linkpkg -package mongo,yojson -thread user.ml
ocamlfind ocamlc str.cma content.cmo user.cmo -linkpkg -package mongo -thread database.mli
ocamlfind ocamlc str.cma content.cmo user.cmo -linkpkg -package mongo -thread database.ml
ocamlfind ocamlc str.cma content.cmo user.cmo database.cmo -linkpkg -package mongo -thread login_page.mli
ocamlfind ocamlc str.cma content.cmo user.cmo database.cmo -linkpkg -package mongo -thread login_page.ml
ocamlfind ocamlc -o signup.out str.cma content.cmo user.cmo database.cmo login_page.cmo -linkpkg -package mongo,yojson -thread signup.ml
ocamlfind ocamlc -o login.out str.cma content.cmo user.cmo database.cmo login_page.cmo -linkpkg -package mongo,yojson -thread login.ml
python3 CS3110-Server.py
