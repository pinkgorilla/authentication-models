'use strict'

var MongoModel = require('capital-models').MongoModel;

var user = class Account extends MongoModel {
    constructor(source) {
        super('account', '1.0.0');
        this.username = "";
        this.password = "";
        this.email = "";
        this.locked = false;
        this.confirmed = true;
        this.roles = [];


        this.copy(source);
    }
}

module.exports = user;