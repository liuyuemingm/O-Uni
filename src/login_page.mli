type login_information

type sign_up_information

exception InvalidEmail of User.email_name
(** Raised when an invalid email is encountered. *)

exception InvalidUserName of User.user_name
(** Raised when an invalid username is encountered. *)

val login : login_information -> User.t option
(** login *)

val sign_up : sign_up_information -> User.t
(** sign up*)
