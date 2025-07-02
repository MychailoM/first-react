import React, {Component} from 'react';

// class Togle extends Component{
//   state = {
//     isOpen: false,
//   }

//   hide = () => {
//     this.setState({isOpen: false})
//   }

//   show = () => {
//     this.setState({ isOpen: true });
//   }

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;
  
  
//     return (
//       <>
//         <button onClick={this.show}>show</button>
//         <button onClick={this.hide}>hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }
// export default App;


// class ClickCounter extends Component{

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
  
//   handleClick = () => {
//     this.setState((state) => ({ count: state.count + 1 }))    
//   }

//   restart = () => {
//     this.setState({count: 0})
//   }

//   render() {
//     const { count } = this.state;
//     const max = count >= 10;
//     return (
//       <div>        
//         <h2>ви натиснули {count} разів</h2>
//         {max ? (<>
//         <button onClick={this.restart}>restart</button>
//         </>) : (
//             <>
//             <button onClick={this.handleClick}>+1</button>
//             </>
//         )}
//       </div>
//     )
//   }
// }

// export default ClickCounter;



class Toggler extends Component{ 
  constructor(props){
    super(props)
    
    this.state = {
      theme: true
    }
  }

  toggleTheme = () => {
    this.setState((state)=>({theme: !state.theme}))
  }

  render() {
    const { theme } = this.state;
    const styles = {
      padding: 30,
      backgroundColor: theme?"#fff":"#222",
      color: theme?"#222":"#fff",
    }
    return (
      <div style={styles}>
        <h2>hello</h2>
        <button onClick={this.toggleTheme}>click</button>
      </div>
    );
  }
}

export default Toggler