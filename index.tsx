import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
  reportTitle: string;
  reportDate: string;
  userFirstName: string;
  userLastName: string;
  assocAINo: string;
  assocName: string;
  assocAddress: string;
  assocCity: string;
  assocState: string;
  assocZip: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Report',
      reportTitle: 'Association Insights Report® for',
      reportDate: 'March 15, 2022',
      userFirstName: 'Clayton',
      userLastName: 'Kershaw',
      assocAINo: 'US-CA-003999',
      assocName: 'Oak Park Calabasas HOA',
      assocAddress: '4700 Park Granada',
      assocCity: 'Calabasas',
      assocState: 'CA',
      assocZip: '91302'
    };
  }

    render() {
    return (
      <div className="style">
        <p>
        <table id="header" className="tableStyle">
          <tr>
            <td className="tdHeaderLeft">
              {this.state.reportTitle}
            </td>
            <td className="tdHeaderRight">
              <table>
                <tr>
                  <td className="bold">
                  Prepared for
                  </td>
                </tr>
                <tr>
                  <td>
                  {this.state.userFirstName} {this.state.userLastName}
                  </td>
                </tr>
                <tr>
                  <td className="bold">
                    AI#
                  </td>
                </tr>
                <tr>
                  <td>
                  {this.state.assocAINo}
                  </td>
                </tr>
                <tr>
                  <td className="bold">
                    {this.state.reportDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table id="assoc" className="tableStyle">
          <tr>
            <td className="tdAssocName">
              {this.state.assocName}
            </td>
          </tr>
          <tr>
            <td className="tdAssocAddress">
              {this.state.assocAddress} {this.state.assocCity}, {this.state.assocState} {this.state.assocZip}
            </td>
          </tr>               
        </table>
        <table id="FiPhO" className="tableStyle">
          <tr>
          </tr>
        </table>    
        <table id="page1Footer" className="tableStyle">
          <tr>
            <td className="tdLeftWidth">
            This report provides you with information about the Association’s overall health based on data provided by the Association’s Board of Directors or a person or company serving as their Fiduciary Agent. There may be other factors not part of this report that may affect the accuracy of this report.
            2022 Association Reserves Consulting, Inc. All rights reserved.
            </td>
            <td className="tdRightWidth">
              <img src="../../images/Logo.PNG" alt="Logo" />
            </td>
          </tr>
        </table>    

      </p>        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));