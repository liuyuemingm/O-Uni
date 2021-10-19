type personal_info = {email: string; password: string; name: string; school: string; year: int; major: string}
type content = string list
type t = {email: string; p_info: personal_info; cont: content}

type email_name = string
(** The type of email identifiers. *)

type user_name = string
(** The type of user names. *)

type password = string
(** the type of passwords. *)

let init_content = []

let init_personal_info (info : personal_info) = info

let init_user (info : personal_info) : t = 
  {email=info.email; p_info=init_personal_info info; cont=init_content}

let get_email (info : personal_info) = info.email

let get_school (info : personal_info) = info.school

let get_major (info : personal_info) = info.major

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

