let myMongoDB = Database.startDB 

(* {email: string; password: string; name: string; school: string; year: int; major: string} *)

let get_input () = 
  match read_line () with
  | x -> x

let sign_up () : User.t = 
  let () = print_endline "Signing UP.\n" in
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
  (* {eamil;password;name;school;year;major} *)


let main () = 
  print_endline
    "Please sign up or login.\n";
  print_string "> ";
  match read_line () with
  | "sign up" -> let user = sign_up () in 
    let res = Database.insert_user myMongoDB user in 
    print_endline "inserted.\n"
    | "login" -> let user = sign_up () in 
    let res = Database.insert_user myMongoDB user in 
    print_endline "inserted.\n"
  | _ -> print_endline "failed"; exit 0

(* Execute the game engine. *)
let () = main ()