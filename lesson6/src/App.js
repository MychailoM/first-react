// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// class MyClassComponent extends Component{
//   static defaultProps = {
//     title: "Class component",
//   };
//   static propTypes = {
//     title: PropTypes.string,
//   };

//   render() {
//     return <div>{this.props.title}</div>
//   }
// }

// export default MyClassComponent;



//1

// import React, { Component } from "react";

// class App extends Component{
//   static defaultProps = {
//     step: 1,

//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     }
//   }

//   handleInc = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + this.props.step,
//     }));
//   }

//   handleDec = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - this.props.step,
//     }));
//   }

//   render() {
//     const { step } = this.props;
//     const { value } = this.state;

//     return (
//       <div>
//         <button onClick={this.handleDec}>-{step}</button>
//         <p>{value}</p>
//         <button onClick={this.handleInc}>+{step}</button>
//       </div>
//     )
//   }
// }

// export default App;



//2

// import React, {Component} from "react";

// class Counter extends Component{
//   static defaultProps = {
//     step: 1,
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     }
//   }
//     handleInc = (e) => {
//       console.log('Event:', e);
//       this.setState((prevState) => ({
//         value: prevState.value + this.props.step
//       }));
//     }
  

//   handleDec = (e) => {
//     console.log('Event:', e);
//     this.setState((prevState) => ({
//       value: prevState.value - this.props.step
//     }));
//   }

//   render() {
//     const { step } = this.props;
//     const { value } = this.state
    
//     return (
//             <div>
//               <button onClick={this.handleDec}>-{step}</button>
//               <p>{value}</p>
//               <button onClick={this.handleInc}>+{step}</button>
//             </div>
//           )
//   }
// }


// export default Counter;




//3

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };

//     this.handleInc = this.handleInc.bind(this);
//     this.handleDec = this.handleDec.bind(this);
//   }

//       handleInc(){        
//         this.setState((prevState, props) => ({
//           count: prevState.count + props.step
//         }));
//       }

//     handleDec(){      
//       this.setState((prevState, props) => ({
//         count: prevState.count - props.step
//       }));
//     }
  
//   render() {
//     const { step } = this.props;
//     const { count } = this.state

//         return (
//                 <div>
//                   <button onClick={this.handleDec}>-{step}</button>
//                   <p>{count}</p>
//                   <button onClick={this.handleInc}>+{step}</button>
//                 </div>
//               )
//   }
// }

// Counter.defaultProps = {
//   step: 10,
// }

// export default Counter


// import React, { Component } from "react";
// import "./App.css"

// class HelloMessage extends Component{
//   static defaultProps = {
//     name: "Misha",
//   }

//   render() {
//     const { name } = this.props;
//     return (
//       <p className="name">Hello: {name}</p>
//     )
//   }
// } 

// export default HelloMessage;


import React, { Comment, Component } from "react";

class TogleButton extends Component{
  static defaultProps = {
    value: "ON"
  }

  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    }

    this.togle = this.togle.bind(this);
  }

  togle() {
    this.setState((prevState) => ({
      isOn:!prevState.isOn
    }))
  }

  render() {
    return (
      <button onClick={this.togle}>{this.state.isOn?"ON":"OFF"}</button>
    )
  }
}

export default TogleButton;