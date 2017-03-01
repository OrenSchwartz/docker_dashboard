import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Page, Table }  from './components'
import { MENU_ITEMS } from './consts'
import TableColumnTypes from './components/Table/TableColumnTypes'
injectTapEventPlugin();

const data = [{
  org: "Gett",
  repo: "R&D repo",
  tags: ["prod", "travel_policy"],
  branch: "master",
  buildDate: "12/2/17",
  buildTime: "12:30",
  size: 1.56,
  state: "up",
  sha1: "7d608293-accd-4065-a1b7-84e78adb7a90",
  dockerFile: "MyDockerfile",
  layers: {},
  commitMessage: "my commit message to all",
  diff: "",
  containers: []
}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:MENU_ITEMS[0].toLowerCase()
    }
  }

  handleMenuItemClick(i, e) {
    this.setState({currentPage:MENU_ITEMS[i].toLowerCase()})
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Page
            menuItems={MENU_ITEMS}
            onClick={this.handleMenuItemClick.bind(this)}
          >
            <Table
              data={ data }
              columns={ TableColumnTypes[this.state.currentPage] }/>
          </Page>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
