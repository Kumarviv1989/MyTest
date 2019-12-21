import React from 'react';
import firebase from "firebase/app";
import {storage} from '../FirebaseFiles/Firebase';
import {firbaseapp} from '../FirebaseFiles/Firebase';
import FileUploader from "react-firebase-file-uploader";

import ReactDOM from 'react-dom';

class Search extends React.Component
{
    state = {
        filename: '',
        downloadURL:'',
        isUploading: false,
        uploadProgress: 0,
        companyName: ''

      };
    
      GetCompnayName = (event)=>{
        this.setState({ companyName: event.target.value });
        console.log(this.state.companyName);
    }

      handleUploadStart = () =>
        this.setState({
          isUploading: true,
          uploadProgress: 0
        });
    
      handleProgress = progress =>
        this.setState({
          uploadProgress: progress
        });
    
      handleUploadError = error => {
        this.setState({
          isUploading: false
          // Todo: handle error
        });
        console.error(error);
      };
    
      handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL();
    
        this.setState(oldState => ({
          filename: this.state.companyName,
          downloadURL: downloadURL,
          uploadProgress: 100,
          isUploading: false
        }));
      //  this.setState({downloadURL: downloadURL})
       // console.log(downloadURL);
      };
    
      render() {
        return (
          <div className="ui segment">
              <div>
                <input type="text" onChange={this.GetCompnayName}></input>
              </div>
            <FileUploader
              accept="image/*"
              name="image-uploader"
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
              filename={this.state.filename}
              metadata={{'comp':"Dfd"}}
            />
    
            <p>Progress: {this.state.uploadProgress}</p>
    
            <p>Filenames: {this.state.filename}</p>
            <div>
                {this.state.downloadURL}
            </div>
          </div>
        );
      }
    }
    
    export default Search;