import History from './model'

export const getHistory = (req, res) => {
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