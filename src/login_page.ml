type login_information = {email: string; password: string}

type sign_up_information = User.personal_info

exception InvalidEmail of string

exception InvalidUserName of string

exception InvalidSchoolName of string

exception InvalidMajorName of string

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

let login login_info = 
  let email = login_info.email in
  let pswd = login_info.password in 
  None
  
let sign_up (sign_up_info : sign_up_information) : User.t = 
  if not (valid_email (User.get_email(sign_up_info))) then
    raise (InvalidEmail (User.get_email(sign_up_info)))
  else if not (valid_string (User.get_school(sign_up_info))) then
    raise (InvalidSchoolName (User.get_school(sign_up_info)))
  else if not (valid_string (User.get_major(sign_up_info))) then
    raise (InvalidMajorName (User.get_major(sign_up_info)))
  else User.init_user sign_up_info
    
  
  




