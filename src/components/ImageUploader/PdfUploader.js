import React, { Component } from 'react';
import firebase from './../../fire';
import axios from 'axios';
import { addProperty } from '../../ducks/propertiesReducer';
import { connect } from 'react-redux';

class PdfUploader extends Component {
    constructor(props){
        super(props);

        this.state = {
            file: '',
            imagePreview: ''
        }

        this.handlePreview = this.handlePreview.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handlePreview(file){
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file[0],
                imagePreview: reader.result
            }, () => this.handleUpload());
        };
        reader.readAsDataURL(file[0]);
    }

    handleUpload(){
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef
        .child(`casa/${this.state.file.name}`)
        .put(this.state.file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                console.log(snapshot) // change this
            },
            (error) => {
                console.log("handleUpload error msg: ",error);
            },
            (success) => { 
                
                console.log(uploadTask.snapshot.downloadURL, "NAME");
                console.log(this.props);
                this.props.handleImg(uploadTask.snapshot.downloadURL);
            },
        );
    }

    render(){
        console.log(this.props, "img func")
        console.log(this.state, "STATE")
        return (
            <div>
                <h1>Image uploader</h1>
                {this.state.imagePreview && <img src={this.state.imagePreview} />}

                <input placeholder="ImageUpload" type="file" onChange={(event) => {
                    this.handlePreview(event.target.files)
                }}/>

                {/* <button style={{ color: 'black'} } onClick={this.handleUpload}>Handle Upload</button> */}
                </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        properties: state.propertiesreducer,
        state
        
    }
}

export default connect( mapStateToProps, { addProperty } )( PdfUploader );