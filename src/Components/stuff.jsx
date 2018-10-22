import React, { Component } from 'react';

class stuff extends Component {
  state = {cvs : []}
 

 fileUploadHandler(){

  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://192.168.1.117:8090/api/5bcda74ac2e82517d48be150/cvs" );
  //xhttp.setRequestHeader("Content-Type", "multipart/form-data");
  //xhttp.setRequestHeader("Key", "file");
  xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
  xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  xhttp.responseType = 'json';  
  xhttp.onload = ()=>{
    console.log(xhttp.responseText);
    }
  this.setState({cvs:xhttp.responseText});
 }

  render() 
  {
    return (
      <div>
      <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default stuff;
