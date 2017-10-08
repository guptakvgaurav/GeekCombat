import mongoose from 'mongoose'

const Schema = mongoose.Schema

const HistorySchema = new Schema({
	name: { type: String },
	industry: { type: String },
	size: { type: String },
	pointOfContact: { type: String },
	region: { 
		type: String
	},
	accountSource: { type: String },
	successfull: { type: Boolean },
	usefull: { type: Boolean },

	isDecisionMaker: { type: Boolean },
	addedViaPortal: { type: Boolean, default: true},
	actualOutcome: { type: Boolean },
	predictedOutcome: { type: Boolean}
}, { timestamps: true })

export default mongoose.model('History', HistorySchema)