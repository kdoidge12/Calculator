import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      num:'', // Will act as the number inputted before a operand
      input: [] // Will act as the list of input operator/operands
    }

    this.handleClick = this.handleClick.bind(this); 
    this.handleEquals = this.handleEquals.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
  }

  // handleClick(digit) handles the on-click event for the num-pad.
  // Each button sends the character assigned to it and then adds it
  // to the last space in the string 'num' in state
  handleClick(digit){
    this.setState({num:this.state.num+digit})
  }

  clearLabel()
  {
    console.log(this.state.num)
    this.setState(prevState=>({
      operand:[...prevState.operand,prevState.num],
      num: ''
    }))
  }
  handleEquals()
  {
    let user_input = this.state.input;
    let weight_of_operand = {
      "+": 0,
      "-": 0,
      "*": 1,
      "/": 1
    };

    let operator_stack = []
    let operand_stack = []

   /* while(user_input !==[])
    {
        let isOper = user_input.pop();

        !(isOper in weight_of_operand) ? console.log(isOper) : (console.log("operator"))
    }*/

    while(user_input.length !== 0)
    {
      let isOper = user_input.pop()
      //!(isOper in weight_of_operand) ? console.log("operator") : console.log(isOper)

      if(!(isOper in weight_of_operand))
      {
        console.log('operator')
      }
      else
      {  let weightNew = isOper in weight_of_operand;
        let weightStack = operand_stack.top in weight_of_operand
        if (weightNew > weightStack)
          console.log("booya")
      }
        //console.log(isOper)
        
    }  
    //let throwaway = user_input.pop();
    //console.log(throwaway)
    //console.log(user_input)

    /*while(user_input !== undefined || user_input.length !== 0)
    {
      let isOper = user_input.pop();

      !(isOper in weight_of_operand) ? console.log(isOper) : (console.log("operator"))
    }*/
   /* let numbers = this.state.operand;
    numbers = [...numbers,this.state.num]
    let operators = this.state.operator;
    let sum = 0;

    operators.forEach(calculate =>{
      sum+=(parseFloat(numbers[0]) +parseFloat(numbers[1]))
    })

    console.log(sum)*/



  }

  // handleOperators(operators) will receive the operator string from each of the 
  // operands. This functoin will handle clearing the num that is currently in state. 
  handleOperators(operators)
  {
    this.setState(prevState =>({
      input: [...prevState.input,prevState.num,operators],
      num: ''
    }))

//    this.clearLabel();
  }
  render() {
    return (
      <div className="App">
        <label>{this.state.num}</label>
        <div>
          <button onClick={(e)=> this.handleClick('1')}>1</button>
          <button onClick={(e)=> this.handleClick('2')}>2</button>
          <button onClick={(e)=> this.handleClick('3')}>3</button>
          <button onClick={(e)=> this.handleOperators('+')}>+</button>
        </div>
        <div>
          <button onClick={(e)=> this.handleClick('4')}>4</button>
          <button onClick={(e)=> this.handleClick('5')}>5</button>
          <button onClick={(e)=> this.handleClick('6')}>6</button>
          <button onClick={(e)=> this.handleOperators('-')}>-</button>
        </div>
        <div>
          <button onClick={(e)=> this.handleClick('7')}>7</button>
          <button onClick={(e)=> this.handleClick('8')}>8</button>
          <button onClick={(e)=> this.handleClick('9')}>9</button>
          <button onClick={(e)=> this.handleOperators('*')}>*</button>
        </div>
        <div>
          <button onClick={(e)=> this.handleClick('0')}>0</button>
          <button onClick={(e)=> this.handleClick('.')}>.</button>
          <button onClick={this.handleEquals}>=</button>
          <button onClick={(e)=> this.handleClick('/')}>/</button>
        </div>
        
      </div>
    );
  }
}

export default App;
