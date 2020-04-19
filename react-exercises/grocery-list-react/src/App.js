import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
       list:[],
       item:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.handleClearBasket=this.handleClearBasket.bind(this)
  }
  handleChange(item) {
   this.setState({
      item:item
   })
  }
  handleClick() {
    let dup =false
    if(this.state.list.length===0){
      let obj={
        item:this.state.item,
        count:1
      }
      this.setState(prevState => ({
        list: [...prevState.list, obj]
      }))
    }else{
      for(var i=0;i<this.state.list.length;i++){
        if(this.state.list[i].item===this.state.item){
          let newData = this.state.list.slice(0); 
          newData[i].count=newData[i].count+1
          newData.splice(i, 1, newData[i]);
          this.setState({
            list: newData
          });
          dup=true;
          break;
        }
      }
      if(dup===false){
        let obj={
          item:this.state.item,
          count:1
        }
        this.setState(prevState => ({
          list: [...prevState.list, obj]
        }))
      }
    }
  }
  handleClearBasket() {
    this.setState({
      list: []
    })
  }
  changeColor(){
    document.getElementById("item").style.color==="black"?document.getElementById("item").style.color="red":document.getElementById("item").style.color="black"
  }
  render(){
  let renderList=this.state.list.map((item)=><div><span color="black" id="item"onClick={this.changeColor}>{item.item}</span><span id="count">{item.count}</span></div>);
  return (
    <div className="groceryList">
      <header>
        <h1 id="header">Grocery List</h1>
      </header>
      <input  type="text" id="addItems" name="addItems" placeholder="Add Your Items" onChange={(e) => this.handleChange(e.target.value)}></input>
      <button className="button"type="button" onClick={this.handleClick}>Add</button>
      <button className="button"type="button" onClick={this.handleClearBasket}>Clear Basket</button>
      {renderList}
    </div>
  );
  }
}

export default App;
