import React from 'react';
import ReactDOM from 'react-dom';

export default class  UrlToImage extends React.Component
{
  
   GetImage=()=>{
        console.log('Vive');
        var blob;
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
        blob = xhr.response;
        console.log(blob);
        };
        xhr.open('GET', 'https://upload.wikimedia.org/wikipedia/hi/6/68/Sbi_logo.gif');
        xhr.send();
    }
    render(){
        return(
            <div>
           <input type="text"/> 
           <button  onClick={this.GetImage}>Click Me</button>
           </div>
        )
    }


       
   
}