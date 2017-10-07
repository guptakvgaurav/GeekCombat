import React, { Component } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

import GoToHome from './../utils/'

class History extends Component {
  render () {
    return (
      <div>
        <h1 className="ui header">This is History</h1>
        <GoToHome></GoToHome>
        <div className='history_table'>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Industry</Table.HeaderCell>
                  <Table.HeaderCell>Point of contact</Table.HeaderCell>
                  <Table.HeaderCell>Size</Table.HeaderCell>
                  <Table.HeaderCell>Region</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Outcome</Table.HeaderCell>
                  <Table.HeaderCell>Useful?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body> 

              <Table.Footer>
                <Table.Row>
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
                </Table.Row>
              </Table.Footer>
            </Table>
        </div>
      </div>
    )
  }
}
export default History
