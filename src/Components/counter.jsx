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
    console.log(test);

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8090/api/5bc86952c2e82518b84759a7/upload");
    xhttp.setRequestHeader("Content-Type", "form-data");
    //xhttp.setRequestHeader("Key", "file");
    xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    xhttp.responseType = 'text';  
    xhttp.send(fd);
 
    xhttp.onload = ()=>{
      console.log(xhttp.responseText);
      }
    
  }
 
  render() {
    return (
      <div>
      <input type = "file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default counter;

