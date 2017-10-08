import History from './model'
import {calculation} from '../calculation'

export const getHistory = (req, res) => {
    History.find({addedViaPortal: true}).lean().exec()
        .then((history) => {
            res.status(200).json({
                msg: 'success',
                data: history
            })
        })
        .catch(err => {
            console.log('err', err)
            res.send({
                err: err.message
            })
        })
}

export const createHistory = (req, res) => {
    var calc = calculation(req.body.isDecisionMaker, req.body.size, req.body.accountSource, req.body.industry)
    var obj = {
        name: req.body.name,
        industry: req.body.industry,
        size: req.body.size,
        region: req.body.region,
        accountSource: req.body.accountSource,
        isDecisionMaker: req.body.isDecisionMaker || false,
        addedViaPortal: true,
        predictedOutcome: calc >= 0.5,
        probablity: calc
    }
    const history = new History(obj)

    history.save((err, data) => {
        console.log(err)
        if (err) {
            res.send({
                err: err.message
            })
        }
        res.status(200).json(data)

    })
}

export const updateHistory = (req, res) => {
    console.log('here', req.body)
    History.findOneAndUpdate({
        _id: req.body.id
    }, {
        usefull: req.body.usefull,
        actualOutcome: req.body.usefull ? req.body.predictedOutcome : !req.body.predictedOutcome
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