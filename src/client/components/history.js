import React, { Component } from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'

import GoToHome from './../utils/'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    console.log('api hit')
    const config = {
      method: 'get',
      url: 'http://localhost:7777/v1/api/history',
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

  setStatus = (id, status) => {
    console.log('api hit', status, id)
    const config = {
      method: 'put',
      url: 'http://localhost:7777/v1/api/history',
      data: {
        id: id,
        usefull: Boolean(status)
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
    })
    .catch((err) => {
      console.log('err in axios', err)
    })
  }

  render () {
    return (
      <div>
        <h1 className="ui header">This is History</h1>
        <GoToHome></GoToHome>
        <div className='history_table'>
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
                        <Button primary onClick={this.setStatus.bind(null, item._id, 1)}>Yes</Button>
                        <Button secondary onClick={this.setStatus.bind(null, item._id, 0)}>No</Button>
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
      </div>
    )
  }
}
export default History
