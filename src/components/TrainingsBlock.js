import React from 'react';

const TrainingsBlock = () => {
  return (
    <div>
      <h2>Horaires</h2>

      <div className="row">
        <div className="col-sm-6">
          <h3>Jeunes débutants</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Plage horaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mercredi</td>
                <td>18h00 - 19h00</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>16h00 - 17h00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-sm-6">
          <h3>Jeunes confirmés</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Plage horaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>18h00 - 20h00</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>18h00 - 20h00</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>16h00 - 18h30</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-sm-6">
          <h3>Jeunes compétiteurs</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Plage horaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>18h00 - 20h00</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>18h00 - 20h00</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>17h00 - 20h00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-sm-6">
          <h3>Adultes</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Plage horaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>19h00 - 22h00</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>20h00 - 22h00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainingsBlock;
