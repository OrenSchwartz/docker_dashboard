import React, { Component } from 'react';

function renderStyleColorByState(state){
  const style = {height:"100%", width:"100%"};
  const val = state ? state.value.toLowerCase() : null
  switch (val) {
    case "up":
      return {...style, "background-color": "green"}
      break;
    case "down":
      return {...style, "background-color": "red"}
      break;
    default:
      return {...style, "background-color": "yellow"}
  }
}
export default [{
  header: 'Organization',
  id:"org",
  accessor: 'org' // String-based value accessors!
},
{
  header: 'Repository',
  id:"repo",
  accessor: "repo"
},
{
  header: 'Tags',
  id:"tags",
  accessor: "tags",
  render: tags => tags.value ? tags.value.join() : ""
},
{
  header: 'Branch',
  id:"branch",
  accessor: "branch",
},
{
  header: 'Build At',
  id:"builtAt",
  accessor: d => d.buildDate + " " + d.buildTime,
},
{
  header: 'Docker File',
  id:"dockerFile",
  accessor: "dockerFile",
},
{
  header: 'Size',
  id:"size",
  accessor: "size",
  render: size => size.value + " MB",
  style: {"max-width":"80px"},
  headerStyle: {"max-width":"80px"}
},
{
  header: 'State',
  id:"state",
  accessor: "state",
  render: state => <div style={renderStyleColorByState(state)}/>,
  style: {"max-width":"50px"},
  headerStyle: {"max-width":"50px"}
}
]
