open Yojson

let myMongoDB = Database.startDB 

let file = Sys.argv.(1)

let () = print_endline "in sign up"

let input_json = Yojson.Basic.from_file file

let () = print_endline "received json from file"

let email = input_json |> Yojson.Basic.Util.member "email" |> Yojson.Basic.Util.to_string
let password = input_json |> Yojson.Basic.Util.member "password" |> Yojson.Basic.Util.to_string
let name = input_json |> Yojson.Basic.Util.member "name" |> Yojson.Basic.Util.to_string
let school = input_json |> Yojson.Basic.Util.member "school" |> Yojson.Basic.Util.to_string
let major = input_json |> Yojson.Basic.Util.member "major" |> Yojson.Basic.Util.to_string
let year = input_json |> Yojson.Basic.Util.member "year" |> Yojson.Basic.Util.to_string |> int_of_string

let () = 
  let user = User.init_user (User.info_to_t email password name school year major) in
  try 
    let usr = Database.insert_user myMongoDB user in
    let () = print_endline "inserted.\n" in
    let json = User.user_to_json usr in
    let formated_json = Yojson.Basic.pretty_to_string json in
    let () = print_endline formated_json in
    let oc = open_out file in 
    Printf.fprintf oc "%s\n" formated_json;  
    close_out oc;      
  with _ ->
    let () = print_endline "insertion failed.\n" in
    let json = Yojson.Basic.from_file "Failure.txt" in
    let formated_json = Yojson.Basic.pretty_to_string json in
    let () = print_endline formated_json in
    let oc = open_out file in 
    Printf.fprintf oc "%s\n" formated_json;  
    close_out oc;      

