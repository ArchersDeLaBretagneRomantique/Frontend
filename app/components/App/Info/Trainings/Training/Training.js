import React, { PropTypes } from 'react'

const Training = ({ title, schedules }) => {
  return (
    <div>
      <h4>{title}</h4>
      <table>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Plage horaire</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(({ day, hour }) => {
            return (
              <tr>
                <td>{day}</td>
                <td>{hour}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Training.propTypes = {
  title: PropTypes.string.isRequired,
  schedules: PropTypes.array.isRequired,
}

export default Training
