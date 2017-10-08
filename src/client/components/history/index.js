import React, { Component } from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'

import Navigation from '../navigation'
import './style.scss'

const baseUrl = 'http://localhost:7777/'//'https://sales-predictor.herokuapp.com/'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    const config = {
      method: 'get',
      url: `${baseUrl}v1/api/history`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    }

    axios(config)
    .then((response) => {
      console.log('response', response)
      this.setState({
        data: response.data.data
      })
    })
    .catch((err) => {
      console.log('err in axios', err)
    })
  }

  setStatus = (id, status, predictedOutcome) => {
    console.log('api hit', status, id)
    const config = {
      method: 'put',
      url: `${baseUrl}v1/api/history`,
      data: {
        id: id,
        usefull: status? 'yes': 'no',
        predictedOutcome:  predictedOutcome
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    }

    axios(config)
    .then((response) => {
      console.log('response', response)
      let _datum = this.state.data.find(_datum => _datum._id == id);
      _datum.isReviewed = true;
      _datum.usefull = status? 'yes': 'no'
      this.forceUpdate();
    })
    .catch((err) => {
      console.log('err in axios', err)
    })
  }

  render () {
    return (
      <div className="history-wrapper">
        <Navigation />
        <Grid>
          <Row>
            <Col md={10} smOffset={1}>
              <div className='history-table'>
                <Table celled stackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Company</Table.HeaderCell>
                      <Table.HeaderCell>Industry</Table.HeaderCell>
                      <Table.HeaderCell>Point of contact</Table.HeaderCell>
                      <Table.HeaderCell>Size</Table.HeaderCell>
                      <Table.HeaderCell>Region</Table.HeaderCell>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                      {/*<Table.HeaderCell>Successfull</Table.HeaderCell>*/}
                      <Table.HeaderCell>Was this helpfull ?</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {this.state.data.map((item, index) => {
                      let fa_like_icon_class = '';
                      let fa_dislike_icon_class = '';
                      if(item.isReviewed){
                        fa_like_icon_class = 'fa-icon-disabled';
                        fa_dislike_icon_class = 'fa-icon-disabled';
                        if(item.usefull == 'yes'){
                          fa_dislike_icon_class = fa_dislike_icon_class + ' fa-icon-hide';
                        }
                        if(item.usefull == 'no'){
                          fa_like_icon_class = fa_dislike_icon_class + ' fa-icon-hide';
                        }
                      }

                      return (
                        <Table.Row key={index}>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.industry}</Table.Cell>
                          <Table.Cell>{item.pointOfContact}</Table.Cell>
                          <Table.Cell>{item.size}</Table.Cell>
                          <Table.Cell>{item.region}</Table.Cell>
                          <Table.Cell>{moment(item.createdAt).format('MM/DD/YYYY')}</Table.Cell>
                          {/*<Table.Cell>{String(item.usefull)}</Table.Cell>*/}
                          <Table.Cell>
                            <FontAwesome name='thumbs-up' onClick={this.setStatus.bind(null, item._id, 1, item.predictedOutcome)} 
                              className={ fa_like_icon_class }
                            />
                            <FontAwesome name='thumbs-down' onClick={this.setStatus.bind(null, item._id, 0, item.predictedOutcome)} 
                              className={ fa_dislike_icon_class }
                            />
                          </Table.Cell>
                          {/*<Table.Cell>{String(item.successfull)}</Table.Cell> */}
                        </Table.Row>
                      )
                    })}
                  </Table.Body>

                  <Table.Footer>
                    {/* <Table.Row>
                     <Table.HeaderCell colSpan='12'>
                     <Menu floated='right' pagination>
                     <Menu.Item as='a' icon>
                     <Icon name='left chevron' />
                     </Menu.Item>
                     <Menu.Item as='a'>1</Menu.Item>
                     <Menu.Item as='a'>2</Menu.Item>
                     <Menu.Item as='a'>3</Menu.Item>
                     <Menu.Item as='a'>4</Menu.Item>
                     <Menu.Item as='a' icon>
                     <Icon name='right chevron' />
                     </Menu.Item>
                     </Menu>
                     </Table.HeaderCell>
                     </Table.Row>*/}
                  </Table.Footer>
                </Table>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default History
