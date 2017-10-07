import React, {Component, PropTypes} from 'react'
import {Form} from 'semantic-ui-react'
import GoToHome, {getData} from './../utils/'
import {browserHistory, Link} from 'react-router'


class Predict extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyInfo: {}
        }
    }


    getAPIData =() => {
      getData((data) =>{
        this.gotoScore(data)
      })
    }
    gotoScore =(data) => {
      browserHistory.push({pathname: '/score', query: {"data": data.data.userId } })
    }

    handleChange = (e, {value, name}) => {
        this.setState({companyInfo: {name: value}})
    }


    render() {
        return (
            <div>
              <div className="center">
                <h2 >Predict Screen</h2>
                </div>
                <div className="company_form">
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input name="companyName" onChange={this.handleChange} label='Company name'
                                        placeholder='Company name'/>
                            <Link to="chart" target="_blank" to={`https://in.linkedin.com/company/${this.state.companyInfo.name}`}>Test</Link>
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
                            <Form.Button onClick={() =>this.getAPIData()}>Predict</Form.Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Predict
