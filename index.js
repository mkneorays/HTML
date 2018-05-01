"use strict"
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Hello extends React.Component{
	//u can define constructor also
	constructor(){
	  super(); //this is mandateroy
	  this.name="davit";
	  //this is a state
	  this.state={
	     firstname: 'Mithilesh Chandra'
	  }
	}
render(){
return (
 <h1>Helo Good Morning  {this.name}
   <p>{this.state.firstname}</p>
</h1>	

)
}//render method
}//class

class World extends React.Component
{
	getName(){
	  return "anish";
	}
render(){
   return(<p>MITHILESH <br/> {this.getName()}

   </p>   
   )
}//render
}//class

class FirstReact extends React.Component
{
	render(){
	return(
		<p>
	    <Hello />
		<World/>
	    </p>
	)
	}//render
};

ReactDOM.render(<FirstReact/>,document.getElementById("root"))

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Hello extends React.Component{
	//u can define constructor also
	constructor(){
	  super(); //this is mandateroy
	  this.name="davit";
	  //this is a state
	  this.state={
	     firstname: 'Mithilesh Chandra'
	  }
	}
render(){
return (
 <h1>Helo Good Morning  {this.name}
   <p><World  detail={this.state.firstname}/></p>
</h1>	

)
}//render method
}//class

class World extends React.Component
{
	getName(){
	  return "anish";
	}
render(){
   return(<p>MITHILESH <br/> {this.getName()}
  <li>
    {this.props.detail}	  
  </li>
   </p>   
   )
}//render
}//class


ReactDOM.render(<Hello/>,document.getElementById("root"))
*/
/*


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Hello extends React.Component{
	//u can define constructor also
	constructor(){
	  super(); //this is mandateroy
	  this.name="davit";
	  //this is a state
	  this.state={
	     name1: ['Mithilesh',' Chandra','yougesh']
	  }
	}
render(){
return (
 <h1>Helo Good Morning  {
	this.state.name1.map(function(nam){
		return<World key={nam}  detail={nam}/>
	})//function
		}//javascript syntax
   
</h1>	
//key={nam} Warning: Each child in an array or iterator should have a unique "key" prop.
)
}//render method
}//class

class World extends React.Component
{
	
render(){
   return(
  <li>
    {this.props.detail}	  
  </li>
   
   )
}//render
}//class


ReactDOM.render(<Hello/>,document.getElementById("root"))

//output
/*Helo Good Morning
Mithilesh
Chandra
yougesh
javascript syntax
*/
*/


