'use strict'

var MongoModel = require('capital-models').MongoModel;

var user = class UserOrganizationInfo extends MongoModel {
    constructor(source) {
        super('user-organization-info', '1.0.0');
        this.accountId = "";

        this.nik = "";
        this.initial = "";
        this.department = "";


        this.copy(source);
    }
}

module.exports = user;