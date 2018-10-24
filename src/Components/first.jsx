import React, { Component } from 'react';


var url = "";
var animals;
var str;
var strtwo;
var strthree;

export default class first extends Component {

  constructor(props) {
    super(props);
    this.state = {
    allAnimals: [],
    url : ""};

  }


 
 fileUploadHandler =() =>{
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://192.168.1.117:8090/api/5bd03053c2e82505d4ff8142/cvs" );
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

 changeState =() =>{

  var t1 = document.getElementById("1");
  var t2 = document.getElementById("2");
  var t3 = document.getElementById("3");
  str = this.state.allAnimals[0].files_id;
  strtwo = this.state.allAnimals[1].files_id;
  strthree = this.state.allAnimals[2].files_id;
  console.log(strtwo);

  t1.addEventListener("click", function(){ 
    url = ("http://192.168.1.117:8090/api/people/5bd03053c2e82505d4ff8142/state/" + str);
 });
  
  t2.addEventListener("click", function(){ 
    url = ("http://192.168.1.117:8090/api/people/5bd03053c2e82505d4ff8142/state/" + strtwo) ;
 });
  
  t3.addEventListener("click", function(){ 
    url= ("http://192.168.1.117:8090/api/people/5bd03053c2e82505d4ff8142/state/" + strthree);
     });
  

  console.log(url);
   let xhttp = new XMLHttpRequest();
   xhttp.open("GET", url);
   xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
   xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
   xhttp.responseType = 'json';  
   xhttp.send();
   xhttp.onload = ()=>{
    console.log(xhttp.response);
    }
 }

  render() 
  {
    animals = Array.from(this.state.allAnimals);
    var counter = 0;
    return (
      <div>
      <button onClick={this.fileUploadHandler}>Upload</button>

      {animals.map(item => 
      <div>
        <a href={"http://192.168.1.117:8090/api/5bd02474c2e82517d42c4ed8/cv/"+ item.files_id}>Download File</a>
        <button id={("" + ++counter)} name={("" + counter)} onClick={this.changeState}>Flag</button>
        <p>{item.state}</p>
      </div> )}
      </div>

    )
  }
}



