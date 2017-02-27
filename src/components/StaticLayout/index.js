import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import style from './style.css'

export default class StaticLayout extends Component{
  render(){
    console.info(style.drawer)
    return(
      <div className="static_page_content">
        <AppBar className={style.appBar}
          title="Docker Dashboard"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Drawer docked={true} containerClassName={style.drawer}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}
