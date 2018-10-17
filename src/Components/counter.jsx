import React, { Component } from 'react';


class counter extends Component {

handleSubmit(event) {

   var emailstr =  document.getElementById('uname').value;
   var passstr = document.getElementById('pword').value;

   const url = "http://192.168.1.115:8090/api/login"
   const user = {
       "email":emailstr,
       "password":passstr
   }

   console.log(user);
   
   let xhttp = new XMLHttpRequest();
   xhttp.open("POST", url);
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
   xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
   xhttp.responseType = 'text';
   xhttp.send(user);

   xhttp.onload = ()=>{
    console.log(xhttp.responseText);
     }
}


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input type="text" name="uname" id = "uname" />
        </label>
        <label>
          Password:
          <input type="text" name="pword" id="pword"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default counter;
