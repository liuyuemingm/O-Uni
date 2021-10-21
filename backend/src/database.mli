val validate_password : Mongo.t -> string -> string -> User.t

val insert_user : Mongo.t -> User.t -> User.t

val startDB : Mongo.t

val clear : Mongo.t -> unit