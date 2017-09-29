'use strict';

module.exports = UserModel;

function UserModel(user) {
	this.name = (user && user.name ) ? user.name : null;

	var age;
	this.getAge = function(){...}
	this.setAge = function(){...}
}

UserModel.create = function(userModel, cb) {
	//TODO

	cb();
}


{name : 'toto',
	toto : 'toto',}