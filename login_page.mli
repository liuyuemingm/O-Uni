type login_infomation

type sign_up_information

exception InvalidEmail of email_name
(** Raised when an invalid email is encountered. *)

exception InvalidUserName of user_name
(** Raised when an invalid username is encountered. *)

val login : login_infomation -> option t 
(** login *)

val sign_up : sign_up_information -> bool
(** sign up*)
