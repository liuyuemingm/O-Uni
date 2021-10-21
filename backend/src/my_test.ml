let myMongoDB = Database.startDB 

let get_input () = 
  match read_line () with
  | x -> x

let login () = 
  let () = print_endline "Logining In.\n" in
  let () = print_endline "Please enter your login email.\n" in
  let email = get_input () in 
  let () = print_endline "Please enter your password.\n" in
  let password = get_input () in 
  Login_page.init_login_info email password 

let sign_up () = 
  let () = print_endline "Signing Up.\n" in
  let () = print_endline "Please enter an email.\n" in
  let email = get_input () in 
  let () = print_endline "Please enter a password.\n" in
  let password = get_input () in 
  let () = print_endline "Please enter your name.\n" in    
  let name = get_input () in 
  let () = print_endline "Please enter a school.\n" in
  let school = get_input () in 
  let () = print_endline "Please enter your year.\n" in
  let year = int_of_string (get_input ()) in
  let () = print_endline "Please enter your major.\n" in
  let major = get_input () in
  User.init_user (User.info_to_t email password name school year major) 

let print_user_info () = function
| None -> print_endline "Login Failed, returned None.\n"
| Some h -> 
  let () = print_endline "Name:" in
  let () = print_endline (User.get_name h) in
  let () = print_endline "\nSchool:" in
  let () = print_endline (User.get_school h) in
  let () = print_endline "\nMajor:" in
  let () = print_endline (User.get_major h) in
  let () = print_endline "\nYear:" in
  let () = print_endline (string_of_int (User.get_year h)) in
  print_endline "\n"

let rec main = 
  print_endline
    "Please sign up or login.\n";
  print_string "> ";
  match read_line () with
  | "sign up" -> let user = sign_up () in 
    let res = Database.insert_user myMongoDB user  in 
    print_endline "inserted.\n"
    | "login" -> let login_info = login () in 
    let res = Login_page.login login_info myMongoDB in 
    let () = print_endline "login successful.\n" in
    print_user_info () res 
  | _ -> print_endline "failed"; exit 0

(* Execute the game engine. *)
let () = main