type personal_info = {school: string; email: string; nickname: string; year: int; major: string}
type content = {posts: string list}
type t = {email: string; p_info: personal_info; cont: content}

let init_content = []

let init_personal_info (info : personal_info) = info

let init_user info = 
  {email=info.email; p_info=init_personal_info info; cont=init_content}

let personal_info_to_bson p_info = 
  Bson.empty 
  |> Bson.add_element "email" (Bson.create_string p_info.email)
  |> Bson.add_element "year" (Bson.create_int64 (Int64.of_int p_info.year))
  |> Bson.add_element "name" (Bson.create_string p_info.nickname)
  |> Bson.add_element "school" (Bson.create_string p_info.school)
  |> Bson.add_element "major" (Bson.create_string p_info.major)
  
let user_to_bson {email; personal_info; content} = 
  let content_elems = List.map (Bson.create_string) content in
  Bson.empty 
    |> Bson.add_element "personal_info" personal_info_to_bson personal_info
    |> Bson.add_element "email" (Bson.create_string p_info.email)
    |> Bson.add_element "content" (Bson.create_list content_elems) 