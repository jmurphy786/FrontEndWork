import React, { Component } from 'react';

var url;

export default class first extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allAnimals: [],
    url : ""};
  }

 
 fileUploadHandler(){
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://192.168.1.117:8090/api/5bcde391c2e825206ca12047/cvs" );
  xhttp.setRequestHeader('Content-Type', 'application/json');
  //xhttp.setRequestHeader("Key", "file");
  xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
  xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  xhttp.responseType = 'json';  
  xhttp.send();
  
  xhttp.onload = ()=>{
   this.setState({allAnimals: xhttp.response});
   console.log(this.state.allAnimals);
    }
 }

 changeState(){
  let animals = this.state.allAnimals;


  var t1 = document.getElementById("1");
  var t2 = document.getElementById("2");
  var t3 = document.getElementById("3");
  var str = animals[0].files_id;

  if(t1 != null){
  t1.addEventListener("click", function(){ 
    url = ("http://192.168.1.117:8090/api/people/5bcde391c2e825206ca12047/state/" + animals[0].files_id);
 });
  }
  if(t2 != null){
  t2.addEventListener("click", function(){ 
    url = ("http://192.168.1.117:8090/api/people/5bcde391c2e825206ca12047/state/" + animals[1].files_id);
 });
  }
  if(t3 != null){
  t3.addEventListener("click", function(){ 
     url = ("http://192.168.1.117:8090/api/people/5bcde391c2e825206ca12047/state/" + animals[3].files_id);
     });
  }
  console.log(str);
  
   let xhttp = new XMLHttpRequest();
   xhttp.open("POST", url);
   xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
   xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
   xhttp.responseType = 'json';  
   xhttp.send("Unapproved");
   xhttp.onload = ()=>{
    console.log(xhttp.response);
    }
 }

  render() 
  {
    let animals = this.state.allAnimals
    var counter = 0;
    return (
      <div>
      <button onClick={this.fileUploadHandler.bind(this)}>Upload</button>
      <div>
      {animals.map(item => 
      <div>
        <a href={"http://192.168.1.117:8090/api/5bcde391c2e825206ca12047/cv/"+ item.files_id}>Download File</a>
        <button id={("" + ++counter)} name={("" + counter)} onClick={this.changeState.bind(this)}>Flag</button>
      </div> )}
      </div>
      </div>
    )
  }
}


