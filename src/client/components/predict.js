import React, {Component, PropTypes} from 'react'
import {Form} from 'semantic-ui-react'
import GoToHome, {getData} from './../utils/'
import { browserHistory} from 'react-router'


class Predict extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    getAPIData =() => {
      getData((data) =>{
        console.log("API response", data);
        this.gotoScore(data)
      })
    }
    gotoScore =(data) => {
      console.log("LSLLSLS", data);
      browserHistory.push({pathname: '/score', query: {"data": data.data.userId } })
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div>
                <h1 className="ui header">Predict Screen</h1>
                <GoToHome className="ui_header"></GoToHome>
                <button className="ui ui_header violet button" role="button" onClick={() => this.getAPIData()}>Get API Response</button>
                <button className="ui ui_header violet button" role="button" onClick={() => this.gotoScore()}>Go To Score</button>
                <div className="company_form">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input label='Company name' placeholder='Company name'/>
                        <Form.Input label='Company size' placeholder='Company size'/>
                        <Form.Input label='Tech Stack' placeholder='Tech Stack'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input label='Founded Year' placeholder='Year Founded'/>
                        <Form.Input label='Contact Person' placeholder='Enter contacting person'/>
                        <Form.Input label='Specialties' placeholder='Specialties'/>
                    </Form.Group>
                    <Form.Input label='Company Website' placeholder='Company Website..'/>
                    <div className="center">
                        <Form.Button>Predict</Form.Button>
                    </div>
                </Form>
            </div>
        </div>
        )
    }
}


export default Predict
