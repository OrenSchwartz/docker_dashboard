import React, { Component } from 'react';

const MENU_ITEM_STYLE   = { width: "40px", height: "40px", top: "-10px" }

export const APP_BAR_ICON =
  <img style={MENU_ITEM_STYLE} src="http://img.linux.net.cn/data/attachment/album/201501/11/193209xqeyqqqfi5fjg3i3.jpeg"/>
export const MENU_ITEMS = ["Images", "Containers", "Environments"]
export const MENU_ITEMS_ICONS = [
    <img style={MENU_ITEM_STYLE} src="https://runnable.com/images/production/dockerfile.svg"/>,
    <img style={MENU_ITEM_STYLE} src="https://giantswarm.io/static/img/partners/docker.svg"/>,
    <img style={MENU_ITEM_STYLE} src="https://technologyconversations.files.wordpress.com/2015/10/swarm-logo.png"/>
]
