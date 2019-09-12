import React, {Component} from 'react';
import Viewport from './components/viewport'
import './App.css';
import Input from './components/input'
import Header from './components/Header'



const calc ={
  footArray: [],
  inchArray: [],
  minusInchArray: [],
  minusFootArray:[],
  footInchArray:[],
  minusFootInchArray:[],
  totalInchArray:[],
  minusTotalInchArray:[],
  answer: '',
  numeArray:[],
  minusNumeArray: [],
  inputValType: '',
  footInputArray: [],
  inchInputArray:[],
  numeInputArray: [],
  denuInputArray: []
}
const calculations= {
  subtractNumes(posNume, negNume){
    if(posNume>negNume){
      let nume = posNume - negNume;
      return nume;
    }else if(negNume>posNume){
      let nume= posNume-negNume + 16;
      return nume;
    }else{
      let nume=0;
      return nume
    }
  },
  addFeet(arr){
    if(arr.length > 1){
      return arr.reduce((a,b) => a+b)
    }else if(arr.length ===1){
      return arr[0]
    }else{
      return 0
    }
    
  },
  addInches(arr){
    if(arr.length > 1){
      return arr.reduce((a,b) => a+b)
    }else if(arr.length ===1){
      return arr[0]
    }else{
      return 0
    }
  },
  feetToInches(feet){
    let inches = feet*12;
    return inches;
  },
  inchesToFeet(inches){
    let feet= Math.floor(inches/12);
    let inch= inches%12;
    let footInchObj={
      feet: feet,
      inches: inch
    }
    return footInchObj;
  },

  addFeetToInches(ft, inch){
    let totalInch = ft *12 + inch;
    let totalFeet= Math.floor(totalInch/12);
    let inchesLeft= totalInch%12;
    let footInchObj={
      ft: totalFeet, inches: inchesLeft
    }
    return footInchObj
  },
  //makes every fraction something over 16
  getNume(nume, denu){
    let multiplyer= 16/ denu;
    let numerator= nume*multiplyer;
    return numerator;
  },
  //Takes an array of numerators
  fractionToMixed(arr){
    if(arr.length >1){
      let total= arr.reduce((a,b)=> a+b);
      let inches= Math.floor(total/16);
      let numerator= total%16;
      const mixedObj={
        inches: inches, nume: numerator
      }
      return mixedObj
    }else if(arr.length ===1){
      const mixedObj={
        inches: 0, nume: arr[0]
      }
      return mixedObj
    }else{
      const mixedObj={
        inches: 0, nume: 0
      }
      return mixedObj
    }
  
  }
  

}
const makeAnswer = (x,y, z)=>{
  let answer =''
  if(z > 0){
     answer = `${x}ft - ${y}in ${z}/16`;
    calc.answer = answer;
  }else{
   answer= `${x}ft - ${y}in`;
    calc.answer = answer;
  }

return answer
}

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      footInputVal: '',
      inchInputVal: '',
      data: '',
      stateAnswer: '',
      numeInputVal: '',
      denuInputVal: '',
      fraction: '',
      numberInputType: 'ft',
  
     };
    this.handleChangeFeet = this.handleChangeFeet.bind(this);
    this.handleChangeInches= this.handleChangeInches.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEqual= this.onEqual.bind(this);
    this.onSubtract = this.onSubtract.bind(this);
    this.handleChangeDenu = this.handleChangeDenu.bind(this);
    this.handleChangeNume= this.handleChangeNume.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  //All Clear
  handleClear(e){
    this.setState({
      footInputVal: '',
      inchInputVal: '',
      data: '',
      stateAnswer: '',
      numeInputVal: '',
      denuInputVal: '',
      fraction: '',
      numberInputType: 'ft',
    })
    calc.footArray= [];
  calc.inchArray= [];
  calc.minusInchArray= [];
  calc.minusFootArray=[];
 calc.totalInchArray=[];
  calc.minusTotalInchArray=[];
 calc.answer= '';
  calc.numeArray=[];
  calc.minusNumeArray= [];
  calc.inputValType= '';
  calc.footInputArray= [];
  calc.inchInputArray=[];
  calc.footInchArray=[];
  calc.footInchArray=[];
  }
  //function to control foot input field
  handleChangeFeet(e){
    let inputvalue = e.target.value;
    this.setState({
      footInputVal: inputvalue
    })
  }
  //function to control the inch input field
   handleChangeInches(e){
     let inputvalue = e.target.value;
    
     this.setState({
       inchInputVal: inputvalue
     })
    }
    handleChangeNume(e){
      let inputValue = e.target.value;
      this.setState({
        numeInputVal: inputValue
      })
     
    }
    handleChangeDenu(e){
      let inputValue = e.target.value;
      this.setState({
        denuInputVal: inputValue
      })
    }
    
    
    onEqual(e){
    

      //handle positive numbers
    let mixedNumber= calculations.fractionToMixed(calc.numeArray);
    if(mixedNumber.inches > 0){
      calc.inchArray.push(mixedNumber.inches);
    }
    
   
    calc.inchArray.forEach(num => Number(num))
    
    
     let totalFeet= calculations.addFeet(calc.footArray);
      
     let totalFeetInches= calculations.feetToInches(totalFeet);
     
     calc.inchArray.push(Number(totalFeetInches))

     let totalInches= calculations.addInches(calc.inchArray);
     
    
     //handle minus numbers
     let minusMixedNumber= calculations.fractionToMixed(calc.minusNumeArray);
     if(minusMixedNumber.inches> 0){
      calc.minusInchArray.push(minusMixedNumber.inches);
     }
     

     let minusTotalFeet= calculations.addFeet(calc.minusFootArray);

     let minusTotalFeetInches= calculations.feetToInches(minusTotalFeet);

     calc.minusInchArray.push(minusTotalFeetInches)
      
     let mixedNumberFinal = Number(mixedNumber.nume) - Number(minusMixedNumber.nume);
    
     let minusTotalInches= calculations.addInches(calc.minusInchArray);

     if(mixedNumberFinal<0){
       minusTotalInches++;
       mixedNumberFinal+=16
     }

     let finalInches= totalInches - minusTotalInches;
    
     let footInchObj= calculations.inchesToFeet(finalInches);
     console.log(typeof footInchObj.feet)
     console.log(typeof footInchObj.inches)
     console.log(typeof footInchObj.mixedNumberFinal)
     if(mixedNumberFinal === undefined){
       calc.answer= makeAnswer(footInchObj.feet, footInchObj.inches)
     }else{
      calc.answer= makeAnswer(footInchObj.feet, footInchObj.inches, mixedNumberFinal)
     }

    

    this.setState({
      footInputVal: '',
      inchInputVal: '',
      numeInputVal: '',
      denuInputVal: '',
      numberInputType: 'ft'
    })
    calc.footInputArray = [];
    calc.inchInputArray = [];
    calc.numeInputArray= [];
    calc.denuInputArray= [];
  
      
    }

    // *******Subtract Numbers ***********

    onSubtract(e){
    
      const { footInputVal, inchInputVal, numeInputVal, denuInputVal } = this.state;

      let footInchObj ={ 
        feet: footInputVal, 
        inches: inchInputVal,
        nume: numeInputVal, 
        denu: denuInputVal};

      let tempArray = []

      tempArray.push(footInchObj)

      calc.minusFootInchArray.push(footInchObj)
      
      let numeratorTotal= calculations.getNume(numeInputVal, denuInputVal);
      
      calc.minusNumeArray.push(Number(numeratorTotal));
      calc.minusFootArray.push(Number(footInputVal));
      calc.minusInchArray.push(Number(inchInputVal));
      
      this.setState({
        footInputVal: '',
        inchInputVal: '',
        numeInputVal: '',
        denuInputVal: '',
        numberInputType: 'ft'
      })
      
     
      calc.footInputArray = [];
      calc.inchInputArray = [];
      calc.numeInputArray= [];
      calc.denuInputArray= [];
    }

    // ******* Add Numbers ********** 
    onAdd(e){
      
     const { footInputVal, inchInputVal, numeInputVal, denuInputVal } = this.state;

      let footInchObj ={ 
        feet: footInputVal, 
        inches: inchInputVal,
        nume: numeInputVal, 
        denu: denuInputVal};

      let tempArray = []

      tempArray.push(footInchObj)

      calc.footInchArray.push(footInchObj)
      
      let numeratorTotal= calculations.getNume(numeInputVal, denuInputVal);
      
      calc.numeArray.push(numeratorTotal);
      calc.footArray.push(Number(footInputVal));
      calc.inchArray.push(Number(inchInputVal));
      
      this.setState({
        footInputVal: '',
        inchInputVal: '',
        numeInputVal: '',
        denuInputVal: '',
        numberInputType: 'ft'
        
      })
      calc.footInputArray = [];
      calc.inchInputArray = [];
      calc.numeInputArray= [];
      calc.denuInputArray= [];
    }

//Click event to change input type on the touchpad from foot => inch => fraction

    handleInputChange(e){
     
      let input = e.target;
      if(input.className.includes('inputVal')){
        
        const inputType= input.id;
        
        this.setState({
          numberInputType : inputType,
        })
        
      }
     
    }
   //Use the onscreen keypad to enter values into the input fields

    handleClick(e){
      const { numberInputType } = this.state;
      const { footInputArray, inchInputArray, numeInputArray, denuInputArray } = calc
      let input= e.target;
      
      if(e.target.className.includes('number')){
        
        if(numberInputType === 'ft' || numberInputType=== 'feet'){
         footInputArray.push(String(input.value)) 
         let footInputString= footInputArray.join('')
         let inputNum= Number(footInputString)
        
         this.setState({
           footInputVal: inputNum
         })
        }else if(numberInputType ==="in" || numberInputType === 'inches'){
          inchInputArray.push(String(input.value));
          let inchInputString= inchInputArray.join('');
          let inputNum = Number(inchInputString)
          
          this.setState({
            inchInputVal: inputNum
          })
        }else if(numberInputType ==="nume" || numberInputType === 'numerator'){
          numeInputArray.push(String(input.value));
          let numeInputString= numeInputArray.join('');
          let inputNum = Number(numeInputString)
          
          this.setState({
            numeInputVal: inputNum
          })
        }else if(numberInputType ==="denu" || numberInputType === 'denumerator'){
          denuInputArray.push(String(input.value));
          let denuInputString= denuInputArray.join('');
          let inputNum = Number(denuInputString)
          
          this.setState({
            denuInputVal: inputNum
          })
        }
      }
    }
   
  render(){
    
    
  return (
    <div className="bodydiv">
    <div className="container">
  
      <Header />
      <Viewport outputArray={calc.footInchArray}
        minusOutputArray={calc.minusFootInchArray}
        answer = {calc.answer} />
      <Input
        onClear={this.handleClear}
        handleInputChange={this.handleInputChange}
        inchVal={this.state.inchInputVal} 
        handleClick={this.handleClick}
        footVal={this.state.footInputVal}
        handleFeet={this.handleChangeFeet} 
        handleInches={this.handleChangeInches} 
        handleChangeDenu={this.handleChangeDenu}
        handleChangeNume={this.handleChangeNume}
        onAdd={this.onAdd} 
        numeVal={this.state.numeInputVal}
        denuVal={this.state.denuInputVal}
        onEqual={this.onEqual}  
        onSubtract={this.onSubtract}/>
       
      
    
    </div>
    </div>
  );}
}

export default App;
