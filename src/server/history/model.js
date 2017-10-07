const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HistorySchema = new Schema({
	name: { type: String },
	industry: { type: String },
	size: { type: Number },
	pointOfContact: { type: String },
	region: { 
		type: String,
		enum: ['US','EU','INDIA', 'ASIA-PACIFIC']
	},
	successfull: { type: Boolean },
	usefull: { type: Boolean }
}, { timestamps: true })

module.exports = mongoose.model('History', HistorySchema)