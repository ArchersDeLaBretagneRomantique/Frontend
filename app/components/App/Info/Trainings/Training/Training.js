import React, { PropTypes } from 'react'

import {
  Table,
  TableRow,
  TableHeader, TableHeaderColumn,
  TableBody, TableRowColumn,
} from 'material-ui/Table'

const Training = ({ title, schedules }) => {
  return (
    <div>
      <h4>{title}</h4>
      <Table
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Jour</TableHeaderColumn>
            <TableHeaderColumn>Plage horaire</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover
        >
          {schedules.map(({ day, hour }, i) => {
            return (
              <TableRow key={i}>
                <TableRowColumn>{day}</TableRowColumn>
                <TableRowColumn>{hour}</TableRowColumn>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

Training.propTypes = {
  title: PropTypes.string.isRequired,
  schedules: PropTypes.array.isRequired,
}

export default Training
