import React, {Component, PropTypes} from 'react'
import {Form, Select, Checkbox} from 'semantic-ui-react'
import GoToHome, {getData} from '../../utils/'
import {browserHistory, Link} from 'react-router'
import {companySize, regions, companySource,industries, techStacks, accountSources} from '../../seed'
import axios from 'axios'
const baseUrl = 'https://sales-predictor.herokuapp.com/'

class Predict extends Component {

    constructor(props) {
        super(props)
    }

    submitAccountDetail = () => {
        const config = {
        method: 'post',
        url: `${baseUrl}v1/api/history`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json',
            'Accept': 'application/json'
            },
        data: this.state
        }
        axios(config)
            .then((response) => {
                console.log('response', response)
                this.gotoScore(response);
            })
            .catch((err) => {
                console.log('err in axios', err)
            })
    }

    // getAPIData = () => {
    //     getData((data) => {
    //         this.gotoScore(data)
    //     })
    // }

    gotoScore = (data) => {
        browserHistory.push({pathname: '/score', query: {"data": data.data.userId}})
    }

    onCompanyNameChanged = (e, {value, name}) => {
        this.setState({name: value})
    }

    onDecisionChanged = (e, data) => {
        this.setState({
            isDecisionMaker: data.checked
        })
    }

    onCompanySizeChanged = (e, d) => {
        console.log(d);
        this.setState({
            size: d.value
        })
    }

    onRegionChanged = (e, d) => {
        console.log(d);
        this.setState({
             region: d.value   
        })

    }

    onIndustryChanged = (e, d) => {
        console.log(d);
        this.setState({
            industry: d.value
        })
    }

    onTechStackChanged = (e, d) => {
        console.log(d);
        this.setState({
            techStack: d.value
        })
    }

    onAccountSourceChanged = (e, d) => {
        console.log(d);
        this.setState({
            accountSource: d.value
        })
    }

    render() {
        let { name, size, region, isDecisionMaker, techStack, accountSource, industry } = this.state;
        return (
            <div>
                <div className="center">
                    <h2 >Predict Screen</h2>
                </div>
                <div className="company_form">
                    <Form>
                        <Form.Group widths='equal'>

                            <Form.Input name="companyName" 
                                        onChange={ (e, d) => this.onCompanyNameChanged(e, d)}
                                        placeholder='Company name'
                                        value={ name }/>
                            <button>
                                <Link to="chart" target="_blank"
                                      to={`https://in.linkedin.com/company/${this.state.companyInfo.name}`}>Search On
                                    Linkedin</Link>
                            </button>

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Select placeholder='Select company size' 
                                    options={companySize}
                                    onChange = {(e, d) => this.onCompanySizeChanged(e, d)}
                                    value={size}/>
                            <Select placeholder='Select Region' 
                                    options={regions}
                                    onChange = {(e, d) => this.onRegionChanged(e, d)}
                                    value={ region }/>
                            <Select placeholder='Select Industry' 
                                    options={industries}
                                    onChange = {(e, d) => this.onIndustryChanged(e, d)}
                                    value={ industry }/>

                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Checkbox   label={{ children: 'Is contact person decision maker' }}
                                        value={ this.state.isDecisionMaker }
                                        onChange = { (e, d) => this.onDecisionChanged(e, d)}/>
                            <Select     placeholder='Account Source ' 
                                        options={ accountSources }
                                        onChange = {(e, d) => this.onAccountSourceChanged(e, d)}
                                        value={ accountSource }/>
                            <Select     placeholder='Company Tech Stack' 
                                        options={techStacks}
                                        onChange = {(e, d) => this.onTechStackChanged(e, d)}
                                        value={ techStack }/>
                        </Form.Group>

                        <div className="center">
                            <Form.Button onClick={() =>this.submitAccountDetail()}>Predict</Form.Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Predict
