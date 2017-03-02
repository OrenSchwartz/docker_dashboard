import React, { Component } from 'react';
import style from './style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Page, Table }  from './components'
import { TextField } from 'material-ui'
import { MENU_ITEMS, MENU_ITEMS_ICONS } from './consts'
import TableColumnTypes from './components/Table/TableColumnTypes'
import imagesData from './other/data/images'

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:MENU_ITEMS[0].toLowerCase(),
      filterValue:'',
      menuItems: []
    }
  }

  didPageChange = (i) => this.currentPage != MENU_ITEMS[i].toLowerCase()

  handleMenuItemClick(i, e) {
    if (this.didPageChange(i)){
      this.setState({filterValue: ''})
    }

    this.setState({currentPage:MENU_ITEMS[i].toLowerCase()})
  }

  handleFilterValueChange(e, newValue) {
    this.setState({filterValue: newValue.toLowerCase()})
  }

  filterMenuItems(menuItems){
    if (!TableColumnTypes[this.state.currentPage])
      return menuItems

    const fields = TableColumnTypes[this.state.currentPage].map(x=>x.id)
    const filterValue = this.state.filterValue
    return menuItems.filter(item =>
            fields.some(field =>
              item[field] && typeof item[field] === 'string' &&
               item[field].toLowerCase().indexOf(filterValue) !== -1
            )
          )
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Page
            menuItems={ MENU_ITEMS }
            menuItemsIconElements={ MENU_ITEMS_ICONS }
            onClick={ this.handleMenuItemClick.bind(this) }
          >
            <TextField
              onChange={ this.handleFilterValueChange.bind(this) }
              className={ style.filter }
              hintText="Filter"
              value={ this.state.filterValue }
            />
          <div className={ style.table }>
            <Table
              data={ this.filterMenuItems(imagesData) }
              columns={ TableColumnTypes[this.state.currentPage] }
            />
          </div>
          </Page>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
