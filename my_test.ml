module type TREE = sig
  type 'a t 
  val create : 'a -> t
  val build : 'a -> 'a t list -> 'a t
end

module Tree : TREE = struct
  type 'a t = 'a * 'a t list
  let create v = (v, [])
  let build v l = (v,l)
end