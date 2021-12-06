type t = {email: string; heading: string; paragraph : string; date: int; likes: int}

let str_date (d: int): string = 
  let year = d/10000 in 
  let month = (d - year*10000)/100 in
  let day = (d - year*10000 - month*100) in 
  (string_of_int year) ^ " " ^ (string_of_int month) ^ " " ^ (string_of_int day)

let content_to_bson (content: t) = 
  Bson.empty 
  |> Bson.add_element "heading" (Bson.create_string content.heading)
  |> Bson.add_element "date" (Bson.create_int64 (Int64.of_int content.date))
  |> Bson.add_element "likes" (Bson.create_int64 (Int64.of_int content.likes))
  |> Bson.add_element "email" (Bson.create_string content.email)
  |> Bson.add_element "paragraph" (Bson.create_string content.paragraph)

let bson_to_content (bson: Bson.t) = 
  let email = Bson.get_element "email" bson |> Bson.get_string in
  let heading = Bson.get_element "heading" bson |> Bson.get_string in 
  let date = Bson.get_element "date" bson |> Bson.get_int64 |> Int64.to_int in 
  let likes = Bson.get_element "likes" bson |> Bson.get_int64 |> Int64.to_int in 
  let paragraph = Bson.get_element "paragraph" bson |> Bson.get_string in
  {email; heading; date; likes; paragraph}

let content_to_json (content : t) : Yojson.Basic.t = 
  let res = `Assoc [ ("email", `String content.email);("heading", `String content.heading); 
  ("date", `Int content.date); ("likes", `Int content.likes); ("paragraph", `String content.paragraph);] 
  in res

