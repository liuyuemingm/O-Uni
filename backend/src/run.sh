#!/bin/sh
brew services start mongodb-community@5.0
ocamlfind ocamlc str.cma -linkpkg -package mongo -thread user.mli
ocamlfind ocamlc str.cma -linkpkg -package mongo -thread user.ml
ocamlfind ocamlc str.cma user.cmo -linkpkg -package mongo -thread database.mli
ocamlfind ocamlc str.cma user.cmo -linkpkg -package mongo -thread database.ml
ocamlfind ocamlc str.cma user.cmo database.cmo -linkpkg -package mongo -thread login_page.mli
ocamlfind ocamlc str.cma user.cmo database.cmo -linkpkg -package mongo -thread login_page.ml
ocamlfind ocamlc str.cma user.cmo database.cmo login_page.cmo -linkpkg -package mongo -thread my_test.ml
./a.out