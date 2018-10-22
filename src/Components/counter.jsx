import React, { Component } from 'react';
class counter extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
     this.setState({
       selectedFile: event.target.files[0]
     })
     console.log(event.target.files[0]);
  }

  fileUploadHandler = () => {

    const fd = new FormData();
    fd.append("file", this.state.selectedFile);
    console.log(fd);


    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://192.168.1.117:8090/api/5bc88e7ac2e8250f2c94bce1/upload" );
    //xhttp.setRequestHeader("Content-Type", "multipart/form-data");
    //xhttp.setRequestHeader("Key", "file");
    xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    xhttp.responseType = 'text';  
    xhttp.send(fd);
    xhttp.onload = ()=>{
      console.log(xhttp.responseText);
      }
  }
 
  render() 
  {
    return (
      <div>
      <input type = "file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default counter;

