import mongoose from 'mongoose'

const Schema = mongoose.Schema

const HistorySchema = new Schema({
	name: { type: String },
	industry: { type: String },
	size: { type: String },
	pointOfContact: { type: String }, // no
	region: { type: String },
	accountSource: { type: String },
	successfull: { type: Boolean },  // no
	usefull: { type: Boolean },

	isDecisionMaker: { type: Boolean },
	addedViaPortal: { type: Boolean, default: false},
	actualOutcome: { type: Boolean },	// no
	predictedOutcome: { type: Boolean },	// true if probab > 0.5
	probablity: { type: Number}
}, { timestamps: true })

export default mongoose.model('History', HistorySchema)