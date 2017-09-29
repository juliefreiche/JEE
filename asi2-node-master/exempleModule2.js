var UserModel =require ('UserModel');

var user = new UserModel();

UserModel.create(user,function(err,data)){
	...
})