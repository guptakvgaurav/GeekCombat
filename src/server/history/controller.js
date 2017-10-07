const History = require('./model')

exports.getHistory = (req, res) => {
	History.find({}).lean().exec()
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

exports.createHistory = (req, res) => {
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

exports.updateHistory = (req, res) => {
	console.log('here', req.body)
	History.findOneAndUpdate({
		_id: req.body.id
	}, {
		usefull: req.body.usefull
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