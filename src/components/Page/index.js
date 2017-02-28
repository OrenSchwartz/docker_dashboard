import React, { Component } from 'react';
const { string, node, oneOf } = React.PropTypes
import { AppBar, Drawer, MenuItem } from 'material-ui';
import style from './style.css'

export default class Page extends Component{
  static propTypes = {
    children: node,
  }

  static defaultProps = {
    children: null,
  }

  render(){
    return(
      <div className="static_page_content">
        <AppBar className={style.appBar}
          title="Docker Dashboard"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Drawer docked={true} containerClassName={style.drawer}>
            <MenuItem>Images</MenuItem>
            <MenuItem>Containers</MenuItem>
            <MenuItem>Environments</MenuItem>
        </Drawer>
        <div className={style.pageContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
