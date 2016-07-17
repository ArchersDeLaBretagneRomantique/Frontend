import React, { PropTypes } from 'react'

import Table, {
  TableRow,
  TableHeader, TableHeaderColumn,
  TableBody, TableRowColumn,
} from 'components/Table'
import styles from './style.scss'

const Training = ({ title, schedules }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Jour</TableHeaderColumn>
            <TableHeaderColumn>Plage horaire</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
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
