(** Handles posts creation and update **)

(** [ptype] is the types of posts, where [GP] stands for General Post,
    [CR] stands for Course Rating, and [IT] stands for Item Trading. **)
    type ptype =
    | GP
    | CR
    | IT
  
  (** [rtype] is the reaction type of the posts, with [Likes]
      corresponding to [GP], [Rating] corresponding to [CR], and [Price]
      corresponding to [IT]. **)
  type rtype =
    | Likes of int
    | Rating of float * int
    | Price of float
  
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
  (** the type of post value **)
  
  val update_reaction : rtype -> int -> t
  (** update the post of [id] with corresponding reactions. For general
      posts, increase or decrease number of likes by one; for Course
      Rating, recalculate the rating of the course; no change for item
      trading **)
  
  val respond : int -> string -> string -> t
  (** add response to a post **)
  
  val bson_of_post : t -> 'a
  
  val post_of_bson : 'a -> 'b
  
  val json_of_post : t -> 'a
  