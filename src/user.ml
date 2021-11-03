open Yojson 

type personal_info = {email: string; password: string; name: string; school: string; year: int; major: string}
type content = string
type t = {email: string; p_info: personal_info; cont: content list}

type email_name = string
(** The type of email identifiers. *)

type user_name = string
(** The type of user names. *)

type password = string
(** the type of passwords. *)

(* let content_to_json c =  *)

let p_info_to_json (p : personal_info) : Yojson.Basic.t = 
  let res = `Assoc [ ("email", `String p.email);("password", `String p.password); 
  ("name", `String p.name); ("school", `String p.school); ("year", `Int p.year);
  ("major", `String p.major) ] 
  in res

let user_to_json user = 
  (* add in content *)
  let res = `Assoc [ ("email", `String user.email); ("p_info", p_info_to_json user.p_info) ]
  in res

let init_content = []

let init_personal_info (info : personal_info) = info

let info_to_t email password name school year major = 
  {email;password;name;school;year;major}

let init_user (info : personal_info) : t = 
  {email=info.email; p_info=init_personal_info info; cont=init_content}

let get_email (user : t) = user.email

let get_school (user : t) = user.p_info.school

let get_major (user : t) = user.p_info.major

let get_password (user : t) = user.p_info.password

let get_name (user : t) = user.p_info.name

let get_year (user : t) = user.p_info.year

let extract_content (elem : Bson.element) : content = 
  ""

let personal_info_to_bson (p_info : personal_info) = 
  Bson.empty 
  |> Bson.add_element "email" (Bson.create_string p_info.email)
  |> Bson.add_element "year" (Bson.create_int64 (Int64.of_int p_info.year))
  |> Bson.add_element "name" (Bson.create_string p_info.name)
  |> Bson.add_element "school" (Bson.create_string p_info.school)
  |> Bson.add_element "major" (Bson.create_string p_info.major)
  |> Bson.add_element "password" (Bson.create_string p_info.password)
  
let user_to_bson {email; p_info; cont} = 
  let content_elems = List.map (Bson.create_string) cont in
  Bson.empty 
    |> Bson.add_element "personal_info" (Bson.create_doc_element (personal_info_to_bson p_info))
    |> Bson.add_element "email" (Bson.create_string p_info.email)
    |> Bson.add_element "content" (Bson.create_list content_elems) 

let bson_to_personal_info (bson : Bson.t) = 
  let email = Bson.get_element "email" bson |> Bson.get_string in
  let password = Bson.get_element "password" bson |> Bson.get_string in
  let name = Bson.get_element "name" bson |> Bson.get_string in
  let school = Bson.get_element "school" bson |> Bson.get_string in
  let major = Bson.get_element "major" bson |> Bson.get_string in
  let year = Bson.get_element "year" bson |>  Bson.get_int64 |> Int64.to_int in
  {email;password;name;school;year;major}


let bson_to_user (bson : Bson.t) = 
  (* let _ = print_endline "in bson to user" in *)
  let email = Bson.get_element "email" bson |> Bson.get_string in
  (* let _ = print_endline "got email" in *)
  let content = Bson.get_element "content" bson |> Bson.get_list |> List.map extract_content in 
  let personal_info = Bson.get_element "personal_info" bson |> Bson.get_doc_element |> bson_to_personal_info in
  {email;cont=content;p_info=personal_info}

