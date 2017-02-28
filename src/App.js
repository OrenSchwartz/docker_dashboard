import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Page, Table }  from './components'

const data = [{
  name: 'Tanner Linsley',
  age: 26,
  friend: {
    name: 'Jason Maurer',
    age: 23
  }}
]

const columns = [{
  header: 'Name',
  accessor: 'name' // String-based value accessors!
},
// {
//   header: 'Age',
//   accessor: 'age',
//   render: props => <span className='number'>{props.value}</span> // Custom cell components!
// },
{
  header: 'Friend Name',
  id:"fname",
  accessor: d => d.friend.name // Custom value accessors!
}, {
  header: props => <span>Friend Age</span>, // Custom header components!
  id:"age",
  accessor: 'friend.age'
}]

class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Page>
            <Table data={data} columns={columns}/>
          </Page>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
