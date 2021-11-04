open OUnit2
open Database
open Login_page
open User

let pp_pinfo ppf r =
  Format.fprintf ppf "{ email: %s; password: %s; name: %s; school: %s year: %d; major: %s }"  r.email r.password r.name r.school r.year r.major 
 
let pp_login ppf r =
  Format.fprintf ppf "{ email: %s; password: %s }" r.email r.password

let mongo = Database.startDB

let aaron_ye_pinfo = {email: "ajy33@cornell.edu"; password: "abc123"; name: "Aaron"; school: "Cornell"; year: 2024; major: "CS"}

let aaron_ye_pinfo_w = {email: "ajy33@cornell.ed"; password: "abc123"; name: "Aaron"; school: "Cornell"; year: 2024; major: "CS"}

let aaron_ye_login = {email: "ajy33@cornell.edu"; password: "abc123"}

let aaron_ye_wrongemail = {email: "ajy32@cornell.edu"; password: "abc123"}

let aaron_ye_wrongpassword = {email: "ajy33@cornell.edu"; password: "abc321"}

let empty_pinfo = {email: ""; password: ""; name: ""; school: ""; year: 0; major: ""}

let get_optiont s = 
  match s with 
  | None -> empty_pinfo
  | Some a -> a

let login_test (name: string) (input: login_page.login_infomation) (mongo_test: Mongo.t) (expected: personal_info):test = 
  name >:: fun _ ->
    assert_equal expected (get_optiont((login input mongo_test).personal_info)) ~printer: pp_pinfo

let sign_test (name: string) (input: login_page.sign_up_information) (mongo: Mongo.t) (expected: personal_info):test =
  name >:: fun _ ->
    assert_equal expected (get_optiont((sign_up input mongo_test).personal_info)) ~printer: pp_pinfo
    
let init_login_inf_test (name: string) (input_email: string) (input_password: string) (expected: login_infomation):test =
  name >:: fun _ ->
    assert_equal expected (init_login_info input_email input_password) ~printer: pp_login


let login_page_tests = 
  [
    login_test "The login succeeded with email: ajy33@cornell.edu & password: abc123" aaron_ye_login mongo aaron_ye_pinfo;
    login_test "The login failed with email: ajy32@cornell.edu & password: abc123" aaron_ye_wrongemail mongo empty_pinfo;
    login_test "The login failed with email: ajy33@cornell.edu & password: abc321" aaron_ye_wrongpassword mongo empty_pinfo;
    sign_test "The sign_up is successful with aaron_ye_pinfo" aaron_ye_pinfo mongo aaron_ye_pinfo;
    sign_test "The sign_up is unsuccessful with aaron_ye_pinfow" aaron_ye_pinfo_w mongo empty_pinfo;
    init_login_inf_test "The initialization of login with email: ajy33@cornell.edu & password: abc123" "ajy33@cornell.edu" "abc123" aaron_ye_login
  ]


user_aaron = {email = "ajy33@cornell.edu"; p_info = aaron_ye_pinfo; cont = []} 

let get_email_test (name: string) (input: User.t) (expected: string):test =
  name >:: fun _ ->
    assert_equal expected (get_email input) ~printer:pp_string

let get_school_test (name: string) (input: User.t) (expected: string):test =
    name >:: fun _ ->
      assert_equal expected (get_email input) ~printer:pp_string

let get_major_test (name: string) (input: User.t) (expected: string):test =
    name >:: fun _ ->
        assert_equal expected (get_email input) ~printer:pp_string      

let get_password_test (name: string) (input: User.t) (expected: string):test =
    name >:: fun _ ->
        assert_equal expected (get_email input) ~printer:pp_string

let get_year_test (name: string) (input: User.t) (expected: int):test =
    name >:: fun _ ->
        assert_equal expected (get_year input) ~printer:string_of_int

let get_name_test (name: string) (input: User.t) (expected: string):test =
    name >:: fun _ ->
        assert_equal expected (get_name input) ~printer:pp_string

let init_user_test (name: string) (input: User.personal_info) (expected_email: string):test = 
    name >:: fun _ ->
        assert_equal expected_email (get_email (init_user input)) ~printer:pp_string

let info_to_t_test (name: string) (input_email: string) (input_password: string) (input_name: string) (input_school: string) (input_year: int) (input_major: string) (expected: personal_info): test =
    name >:: fun _ ->
        assert_equal expected (info_to_t input_email input_password input_name input_school input_year input_major) ~printer:pp_pinfo

let bson_to_user_test (name: string) (input: Bson.t) (expected_email: string):test = 
    name >:: fun _ -> 
        assert_equal expected_email (bson_to_user input) ~printer: pp_string

let user_tests = 
  [
    get_email_test "The email of user_aaron is ajy33@cornell.edu" user_aaron "ajy33@cornell.edu";
    get_school_test "The school of user_aaron is Cornell" user_aaron "Cornell";
    get_major_test "The major of user_aaron is CS" user_aaron "CS";
    get_name_test "The name of user_aaron is Aaron" user_aaron "Aaron";
    get_year_test "The year of user_aaron is 2024" user_aaron 2024;
    init_user_test "The initialized user of aaron_ye_pinfo is user_aaron" aaron_ye_pinfo "ajy33@cornell.edu";
    info_to_t_test "The required input to get the profile of Aaron is" "ajy33@cornell.edu" "abc123" "Aaron" "Cornell" 2024 "CS" aaron_ye_pinfo;
    bson_to_user_test "This function is right if it can change the input Bson of user_aaron" (user_to_bson user_aaron) user_aaron;
  ]

let validate_test (name: string) (input_mongo: Mongo.t) (input_email: string) (input_password: string) (expected_email: string):test =
    name >:: fun _ ->
        assert_equal expected_email ((validate_password input_mongo input_email input_password).email) ~printer: pp_string

let insert_test (name: string) (input_mongo: Mongo.t) (input_user: User.t) (expected_email: string): test = 
    name >:: fun _ ->
        assert_equal expected_email ((insert_user input_mongo input_user).email) ~printer: pp_string

let daniel_pinfo = {email: "lz489@cornell.edu"; password: "123daniel"; name: "Daniel"; school: "Cornell"; major: "Civil"}

let user_daniel = init_user daniel_pinfo

let database_tests = 
  [
    validate_test "The valid email & password is ajy33@cornell.edu & abc123" mongo "ajy33@cornell.edu" "abc123" "ajy33@cornell.edu";
    insert_test "The insert user_daniel will produce an email lz489@cornell.edu" mongo "lz489@cornell.edu" "123daniel" "lz489@cornell.edu";
  ]

let suite = 
  "test suite for UNi"
  >::: List.flatten [login_page_tests; user_tests; database_tests]

let _ = run_test_tt_main suits