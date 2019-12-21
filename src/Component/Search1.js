import React from 'react';
import firebase from "firebase/app";
import {storage} from '../FirebaseFiles/Firebase';
import {firbaseapp} from '../FirebaseFiles/Firebase';
import FileUploader from "react-firebase-file-uploader";

import ReactDOM from 'react-dom';

class Search1 extends React.Component
{
 
    state={input : '',url : '',firebaseImageUrl : ''}
      
    onInputChange = (event)=>{
        this.setState({ input: event.target.value });
    }

    onLogopathChange=(event)=>{
            this.setState({ url: event.target.value });
    }
     GetImage= ()=>{
         return new Promise((res,rej)=>{
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
                if(xhr.status==200){
                    res(xhr.response);
                }
                else{
                    rej(xhr.status);
                }
            };
            xhr.open('GET', this.state.url);
            xhr.send();
         })
    }

    MyMethod(){
        alert(this.state.input +  " " + this.state.url)
      // alert(this.state.input);
        console.log(this.state.input);
    }

    // async handleChange(event){
    //     var blob = await this.GetImage();
    //     if(blob){

    //         storage.child("foo").put(blob);
            
    //        // storage.ref(`image/${event.target.files[0].name}`);
    //         console.log(event.target.files[0])
    //     }
    // }

    async handleChange(event){
    this.GetImage().then((blob)=>{
            console.log(blob);
            if(blob){

               const uploadTask= storage.child(this.state.input).put(blob);
               uploadTask.on('state_changed',(snapshot)=>{

               },
               (error)=>{
                console.log(error);
                
               } ,
                  ()=>{
                   const resulturl= storage.child(this.state.input).getDownloadURL().then(url=>{
                       console.log(url);
                       this.setState({firebaseImageUrl: url})
                   });
                 //  console.log(resulturl.Promise.value);
                  }
               )
               
               


                
               // storage.ref(`image/${event.target.files[0].name}`);
                //console.log(event.target.files[0])
            }
        })
       
    }

    render()
    {
    return(  <div className="ui segment">
              <div>
                  
                  <div className="field">
                  <label>
                      Enter Company:    
                  </label>
                  <input type="text" size="100" style={{marginTop:'10px',marginLeft:'15px'}}   onChange={this.onInputChange }/>
                  </div>
                 <div className="field">                 
                  <label>
                      Enter  Logo path:
                  </label>
                  {/* <div className="field">
                  <input type="text"  onChange={this.onLogopathChange }/>
                  </div> */}
                  <input type="text" size="100" style={{marginTop:'20px',marginLeft:'10px'}} onChange={this.onLogopathChange}/>
                  </div>

              </div>
              <div>
                  <button style={{marginTop:'10px'}} onClick={()=>{
                      this.handleChange()}}>Click Me</button>
              </div>
              <br/>
              <br/>
                  <div>{this.state.firebaseImageUrl}</div>
      </div>
      
    )}
}

export default Search1;
