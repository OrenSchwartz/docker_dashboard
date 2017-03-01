import React, { Component } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import style from './style.css'
const { string, node, arrayOf, func } = React.PropTypes

export default class Page extends Component{
  static propTypes = {
    menuItems: arrayOf(string),
    children: node,
    onClick: func
  }

  static defaultProps = {
    menuItems: [],
    children: null,
    onClick: (x) => {throw Error("no click handler defined")}
  }

  render(){
    return(
      <div className="static_page_content">
        <AppBar className={style.appBar}
          title="Docker Dashboard"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Drawer docked={true} containerClassName={style.drawer}>
          <div className={style.drawerMenuItems}>
            {
              this.props.menuItems.map((x,i) =>
                <MenuItem
                 key={ i }
                 onClick={this.props.onClick.bind(this, i)}>
                 {x}
               </MenuItem>)
            }
          </div>
        </Drawer>
        <div className={style.pageContent}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
