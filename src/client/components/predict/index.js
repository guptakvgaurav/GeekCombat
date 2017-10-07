import React, {Component, PropTypes} from 'react'
import {Form, Select, Checkbox} from 'semantic-ui-react'
import GoToHome, {getData} from '../../utils/'
import {browserHistory, Link} from 'react-router'
import {companySize, regions, companySource,industry, techStack,} from '../../seed'


class Predict extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyInfo: {}
        }
    }


    getAPIData = () => {
        getData((data) => {
            this.gotoScore(data)
        })
    }
    gotoScore = (data) => {
        browserHistory.push({pathname: '/score', query: {"data": data.data.userId}})
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

                            <Form.Input name="companyName" onChange={this.handleChange}
                                        placeholder='Company name'/>
                            <button>
                                <Link to="chart" target="_blank"
                                      to={`https://in.linkedin.com/company/${this.state.companyInfo.name}`}>Search On
                                    Linkedin</Link>
                            </button>

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Select placeholder='Select company size' options={companySize}/>
                            <Select placeholder='Select Region' options={regions}/>
                            <Select placeholder='Select Industry' options={industry}/>

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Checkbox label={{ children: 'Is contact person decision maker' }}/>
                            <Select placeholder='Account Source ' options={companySource}/>
                            <Select placeholder='Company Tech Stack' options={techStack}/>
                        </Form.Group>

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
