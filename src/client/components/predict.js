import React, {Component, PropTypes} from 'react'
import {Form, Select, Checkbox} from 'semantic-ui-react'
import GoToHome, {getData} from './../utils/'
import {browserHistory, Link} from 'react-router'
import {companySize, regions, companySource,industry, techStack,} from '../seed'
import './predictform.scss'


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
            <div className="csm-predict-input-form-wrapper modal__container">
                <div className="modal__featured csm-predict-input-form-left">
                    
                    <div className="modal__circle"></div>
                       <img src="../../img/oct.png" className="modal__product" />
                </div>
                <div className="csm-predict-input-form-right modal__content">
                    <div className="csm-predict-input-form-title">
                        <h2 >Predict Screen</h2>
                    </div>
                    <div className="company_form">
                        <Form className="form_class">
                            <Form.Group widths='equal' className="form_group_col no-left-padding">
                                <Form.Input name="companyName" onChange={this.handleChange}
                                            placeholder='Company name'/>
                                <span className="popup" data-content="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide." data-variation="wide">
                                  
                                    <Link to="chart" target="_blank"
                                        to={`https://in.linkedin.com/company/${this.state.companyInfo.name}`}></Link>
                                </span>
                               
                            </Form.Group>                           
                            <Form.Group widths='equal' className="form_group_col">
                                  <Select placeholder='Select company size' options={companySize}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">
                                <Select placeholder='Select Region' options={regions}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">                                
                                <Select placeholder='Select Industry' options={industry}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">                                
                               <Checkbox label={{ children: 'Is contact person decision maker' }}/>
                            </Form.Group>
                            <Form.Group widths='equal' className="form_group_col">                                
                            <Select placeholder='Account Source ' options={companySource}/>
                            </Form.Group>
                            
                            <Form.Group widths='equal' className="form_group_col">
                                
                                
                                <Select placeholder='Company Tech Stack' options={techStack}/>
                            </Form.Group>

                            <div className="">
                                <Form.Button onClick={() =>this.getAPIData()}>Predict</Form.Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Predict
