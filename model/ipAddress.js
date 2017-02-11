/*
资产
*/

'use strict'

const mongoose = require('mongoose')
// const plugin = require('../lib/mongoosePlugin')
const Schema = mongoose.Schema


const schema = new Schema({
    ip:{type: String,unique: true, index: true}, //例如：IBM
    resultCode: {type: String},
    lng:{type: Number},
    lat:{type: Number},
    radius:{type: Number},
    confidence:{type: Number},
    address: {type: String},
    loc_time: {type: String},
    remark: {type: String}
  })

// options

//By default, the name of two fields are createdAt and updatedAt, custom the field name by setting timestamps.createdAt and timestamps.updatedAt.
schema.set('timestamps', true) // createAt, updatedAt -> UTC 
schema.set('minimize', false) // true , by default, "minimize" schemas by removing empty object
schema.set('collection', 'ipAddress')
schema.set('toJSON') //, {virtuals: true}

// plugin
// schema.plugin(plugin.crudByAny) //http://mongoosejs.com/docs/plugins.html

const db = require('../config/db');
module.exports = db.main.model('ipAddress', schema)