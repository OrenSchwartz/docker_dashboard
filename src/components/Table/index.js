import React, { Component } from 'react';
import ReactTable from 'react-table'
import style from './style.css'
import '!style!css!react-table/react-table.css' // eslint-disable-line import/no-webpack-loader-syntax
const { arrayOf, object, oneOf } = React.PropTypes

export default class Table extends Component {
  static propTypes = {
    data: arrayOf(object),
    columns: arrayOf(object)
  }

  static defaultProps = {
    data:[],
    columns:[]
  }

  render(){
    return(
      <ReactTable
        columns={this.props.columns}
        data={this.props.data} />
    )
  }
}
