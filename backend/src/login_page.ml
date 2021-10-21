type login_information = {email: string; password: string}

type sign_up_information = User.personal_info

exception InvalidEmail of string

exception InvalidUserName of string

exception InvalidSchoolName of string

exception InvalidMajorName of string

let get_email (info : login_information) : string = 
  info.email

let get_password (info : login_information) : string = 
  info.password

let init_login_info (email : string) (psswd : string) : login_information =
  {email=email; password=psswd} 

let valid_email (email : string) : bool = 
  let pattern = "[a-z0-9]+@[a-z]+\.edu" in
  let exp = Str.regexp pattern in 
  Str.string_match exp email 0 

let valid_string school = 
  let pattern = "[a-z]+" in
  let exp = Str.regexp pattern in
  Str.string_match exp school 0

let login login_info myMongoDB = 
  let email = login_info.email in
  let pswd = login_info.password in 
  try Some (Database.validate_password myMongoDB email pswd) 
  with _ -> None
  
let sign_up (sign_up_info : sign_up_information) (myMongoDB : Mongo.t): User.t option = 
  let user = User.init_user sign_up_info in
  if not (valid_email (User.get_email(user))) then
    raise (InvalidEmail (User.get_email(user)))
  else if not (valid_string (User.get_school(user))) then
    raise (InvalidSchoolName (User.get_school(user)))
  else if not (valid_string (User.get_major(user))) then
    raise (InvalidMajorName (User.get_major(user)))
  else try Some (Database.insert_user myMongoDB user) with _ -> None
    
  




