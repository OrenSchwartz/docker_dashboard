import React, { Component } from 'react';

export default [{
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
