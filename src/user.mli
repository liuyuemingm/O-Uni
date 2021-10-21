(** Representation of user data. *)
 
 type personal_info
 
 type content

 type t
 (** The abstract type of values representing users. *)

 type email_name = string
 (** The type of email identifiers. *)
 
 type user_name = string
 (** The type of user names. *)

 type password = string
 (** the type of passwords. *)

 val user_to_bson : t -> Bson.t

 val get_email : t -> string

 val get_school : t -> string

 val get_major : t -> string

 val get_password : t -> string

 val get_name : t -> string

 val get_year : t -> int 

 val init_user : personal_info -> t 

 val info_to_t : string -> string -> string -> string -> int -> string -> personal_info

 val bson_to_user : Bson.t -> t

