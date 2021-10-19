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

 val get_email : personal_info -> string

 val get_school : personal_info -> string

 val get_major : personal_info -> string

 val init_user : personal_info -> t 


