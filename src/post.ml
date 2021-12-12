type ptype =
  | GP
  | CR
  | IT

type rtype =
  | Likes of int
  | Rating of float * int (* (rating, number of raters) *)
  | Price of float
(* price set by the seller. this value does not change. *)

type t = {
  id : int;
  post_type : ptype;
  author : string;
  title : string;
  message : string;
  date : string;
  reaction : rtype;
  responses : (string * string) list;
}

let string_of_ptype = function GP -> "GP" | CR -> "CR" | IT -> "IT"

let post_of_id (id : int) : t = failwith "TODO"
(* extract from database the post with id =[id] *)

let update_reaction input_rctn id =
  let post = post_of_id id in
  let update_reaction_help original_rctn =
    match (original_rctn, input_rctn) with
    | Likes a, Likes b -> Likes (a + b)
    | Rating (f1, i1), Rating (f2, _) ->
        Rating
          ( i1 |> float_of_int |> ( *. ) f1 |> ( +. ) f2
            |> ( /. ) (float_of_int (i1 + 1)),
            i1 + 1 )
    | _ -> failwith "Update reaction error"
  in
  match post.post_type with
  | GP | CR ->
      { post with reaction = update_reaction_help post.reaction }
  | _ -> failwith "Update reaction error"

let gen_id = failwith "TODO"
(* generate an unique id for a new post *)

let newpost json = failwith "TODO"

let respond id name response =
  let post = post_of_id id in
  let original_res = post.responses in
  { post with responses = (name, response) :: original_res }

let bson_of_post (content : t) =
  Bson.empty
  |> Bson.add_element "heading" (Bson.create_string content.heading)
  |> Bson.add_element "date"
       (Bson.create_int64 (Int64.of_int content.date))
  |> Bson.add_element "likes"
       (Bson.create_int64 (Int64.of_int content.likes))
  |> Bson.add_element "email" (Bson.create_string content.email)
  |> Bson.add_element "paragraph" (Bson.create_string content.paragraph)

let post_of_bson (bson : Bson.t) =
  let email = Bson.get_element "email" bson |> Bson.get_string in
  let heading = Bson.get_element "heading" bson |> Bson.get_string in
  let date =
    Bson.get_element "date" bson |> Bson.get_int64 |> Int64.to_int
  in
  let likes =
    Bson.get_element "likes" bson |> Bson.get_int64 |> Int64.to_int
  in
  let paragraph =
    Bson.get_element "paragraph" bson |> Bson.get_string
  in
  { email; heading; date; likes; paragraph }

let json_of_post (content : t) : Yojson.Basic.t =
  let res =
    `Assoc
      [
        ("email", `String content.email);
        ("heading", `String content.heading);
        ("date", `Int content.date);
        ("likes", `Int content.likes);
        ("paragraph", `String content.paragraph);
      ]
  in
  res
