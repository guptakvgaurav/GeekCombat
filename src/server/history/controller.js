import History from './model'

export const getHistory = (req, res) => {
	History.find({addedViaPortal: true}).lean().exec()
	.then((history) => {
    	res.status(200).json({
    		msg: 'success',
    		data: history
    	})
	})
	.catch(err => {
		console.log('err',err)
		res.send({
			err: err.message
		})
	})
}

export const createHistory = (req, res) => {
	console.log('here', req.body)
	const history = new History(req.body)

	history.save((err) => {
		if (err) {
			res.send({
				err: err.message
			})		
		}
		res.status(200).json({
    		msg: 'success'
    	})

	})
}

export const updateHistory = (req, res) => {
	console.log('here', req.body)
	History.findOneAndUpdate({
		_id: req.body.id
	}, {
		usefull: req.body.usefull,
		actualOutcome: req.body.usefull ? req.body.predictedOutcome: !req.body.predictedOutcome
	}, (err, doc) => {
		if (err) {
			res.send({
				err: err.message
			})		
		}
		res.status(200).json({
    		msg: 'success'
    	})
	})
}