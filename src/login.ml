open Yojson

let myMongoDB = Database.startDB 

let file = Sys.argv.(1)
(* let () = print_endline ("received file from ocaml end " ^ file) *)
let input_json = Yojson.Basic.from_file file
let email = input_json |> Yojson.Basic.Util.member "email" |> Yojson.Basic.Util.to_string
let password = input_json |> Yojson.Basic.Util.member "password" |> Yojson.Basic.Util.to_string

(* let () = print_endline email
let () = print_endline password *)

let () = 
  let login_info = Login_page.init_login_info email password in
  let user = Login_page.login login_info myMongoDB in 
  match user with 
  | None -> 
    (* print_endline ("user " ^ email ^ " does not exist within the database") *)
    let json = Yojson.Basic.from_file "Failure.txt" in
    let formated_json = Yojson.Basic.pretty_to_string json in
    let () = print_endline formated_json in
    let oc = open_out file in 
    Printf.fprintf oc "%s\n" formated_json;  
    close_out oc;      
  | Some h -> 
    let () = print_endline ("user " ^ email ^ " exists within the database") in
    let json = User.user_to_json h in
    let formated_json = Yojson.Basic.pretty_to_string json in
    let () = print_endline formated_json in
    let oc = open_out file in 
    Printf.fprintf oc "%s\n" formated_json;  
    close_out oc;      

    