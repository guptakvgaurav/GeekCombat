import React, {Component, PropTypes} from 'react'
import {Form, Select, Checkbox} from 'semantic-ui-react'
import GoToHome, {getData} from '../../utils/'
import {browserHistory, Link} from 'react-router'
// import toaster from 'react-toaster-js';
import {companySize, regions, companySource,industries, techStacks, accountSources} from '../../seed'
import axios from 'axios'
const baseUrl = 'http://localhost:7777/'//'https://sales-predictor.herokuapp.com/'
import './predictform.scss'
var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Predict extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    showValidationError = () => {
        this.container.error(
            "",
            "There seems to be something wrong with form input!!", {
            timeOut: 5000,
            extendedTimeOut: 3000,
            closeButton: true,
            preventDuplicates: true
        });
    }

    submitAccountDetail = () => {
        if(!this.state.name || !this.state.size || !this.state.region || !this.state.industry || !this.state.techStack || !this.state.accountSource){
            this.showValidationError();
            return ;
        }
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
        browserHistory.push({pathname: '/score', state: data})
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
                <ToastContainer ref={(input) => {this.container = input;}}
                        toastMessageFactory={ToastMessageFactory}
                        className="toast-top-right"
                        preventDuplicates="true" />
                <div className="csm-predict-input-form-wrapper modal__container">
                    <div className="modal__featured csm-predict-input-form-left">

                        <div className="modal__circle"></div>
                        <img src="../../img/oct.png" className="modal__product" />
                    </div>
                    <div className="company_form">
                        <Form className="form_class">
                            <Form.Group widths='equal' className="form_group_col no-left-padding">

                                <Form.Input name="companyName" 
                                            onChange={ (e, d) => this.onCompanyNameChanged(e, d)}
                                            placeholder='Company name'
                                            value={ name }/>
                                <p className="popup" data-content="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide." data-variation="wide" />
                                
                                    <Link   target="_blank"
                                            to={`https://in.linkedin.com/company/${this.state.name}`}>
                                            Search On Linkedin
                                    </Link>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Select placeholder='Select company size' 
                                        options={companySize}
                                        onChange = {(e, d) => this.onCompanySizeChanged(e, d)}
                                        value={size}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Select placeholder='Select Region' 
                                        options={regions}
                                        onChange = {(e, d) => this.onRegionChanged(e, d)}
                                        value={ region }/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Select placeholder='Select Industry' 
                                        options={industries}
                                        onChange = {(e, d) => this.onIndustryChanged(e, d)}
                                        value={ industry }/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Checkbox   label={{ children: 'Is contact person decision maker' }}
                                            value={ this.state.isDecisionMaker }
                                            onChange = { (e, d) => this.onDecisionChanged(e, d)}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Select     placeholder='Account Source ' 
                                            options={ accountSources }
                                            onChange = {(e, d) => this.onAccountSourceChanged(e, d)}
                                            value={ accountSource }/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
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
            </div>
        )
    }
}


export default Predict
