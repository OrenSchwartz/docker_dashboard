import React, { Component } from 'react';
import style from './style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Page, Table }  from './components'
import { MENU_ITEMS } from './consts'
import TableColumnTypes from './components/Table/TableColumnTypes'
import imagesData from './other/data/images'

injectTapEventPlugin();

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
              className= {style.table}
              data={ imagesData }
              columns={ TableColumnTypes[this.state.currentPage] }/>
          </Page>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
