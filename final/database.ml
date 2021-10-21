exception UserNotFound of string
exception UnableToRegister

(*********************** Creating a db instance ************************)

let startDB () = 
  let myMongoDB = 
  let open Mongo in
  let url = "127.0.0.1" in (* string *)
  let port = 27017 in (* int *)
  let dbName = "TutorialDB" in
  let collectionName = "newCollection" in
  create url port dbName collectionName in
  myMongoDB

(*********************** Inserting ************************)

let insert_user (myMongoDB : Mongo.t) (user : User.t) : User.t = 
  (* let info = User.info_to_t "ajy33@cornell.edu" "abc123" "Aaron" "Cornell" 2024 "CS" in *)
  try
   let () = Mongo.insert myMongoDB [(User.user_to_bson user)] in user
  with 
    Mongo.Mongo_failed ex -> (
      Pervasives.print_endline ex;
      Mongo.destory myMongoDB;
      raise UnableToRegister
    )

(*********************** Querying ************************)

let email_to_bson_query email = 
  Bson.empty
    |> Bson.add_element "email" (Bson.create_string email)

let validate_password (myMongoDB : Mongo.t) (email : string) (pwd : string) : User.t =
  try 
    let query = email_to_bson_query email in 
    let res = Mongo.find_q_one myMongoDB query in
    let elem = List.hd (MongoReply.get_document_list res) in
    let user = User.bson_to_user elem in
    let password = User.get_password user in
    if pwd = password then
      let _ = print_endline pwd in
      user
    else 
      raise (UserNotFound email)
  with _ -> raise (UserNotFound email)

let clear (myMongoDB : Mongo.t) = 
  Mongo.delete_all myMongoDB Bson.empty;
  Mongo.destory myMongoDB;
