(**Representation of content of users*)

type t = {email : string ; heading: string; paragraph : string; date: int; likes: int}

val str_date: int -> string

val content_to_bson: t -> Bson.t

val bson_to_content: Bson.t -> t

val content_to_json : t -> Yojson.Basic.t