type login_infomation = {email: string; password: string}

type sign_up_information {email: string; password: string; name: string; school: string: year: int: major: string}

exception InvalidEmail of string

exception InvalidUserName of string

exception InvalidSchoolName of string

exception InvalidMajorName of string

let valid_email email = 
  let pattern = "[a-z0-9]+@[a-z]+\.edu" in
  let exp = Str.regexp pattern in 
  Str.string_match exp email 0 

let valid_string school = 
  let pattern = "[a-z]+" in
  let exp = Str.regexp pattern in
  Str.string_match exp school 0

let login login_info = 
  let email = login_info.email in


let sign_up sign_up_info = 
  if <> valid_email sign_up_info.email then
    raise InvalidEmail sign_up_info.email
  else if <> valid_string sign_up_info.school then
    raise InvalidSchoolName sign_up_info.school
  else if <> valid_string sign_up_info.major then
    raise InvalidMajorName sign_up_info.major 
  else User.init_user sign_up_info
    
  




