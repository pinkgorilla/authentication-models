'use strict'

var MongoModel = require('capital-models').MongoModel;

var user = class UserProfile extends MongoModel {
    constructor(source) {
        super('user-profile', '1.0.0');
        this.accountId = "";

        this.name = "";
        this.dob = new Date();
        this.gender = "";


        this.copy(source);
    }
}

module.exports = user;