import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import pick from '../api/picker.js';
import uploadFile from '../api/upload.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            data: null
        }
    }
    render() {
        let img = this.state.avatarSource == null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ height: 200, width: 200 }}
            />
        return (
            <View>
                <Text>Hello React Native</Text>
                <TouchableOpacity onPress={this.show.bind(this)}>
                    <Text  style={styles.button}>Show Image Picker</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.upload.bind(this)}>
                    <Text style={styles.button}>Upload</Text>
                </TouchableOpacity>
                {img}
            </View>
        )
    }
    show() {
        pick((source, data) => this.setState({  avatarSource: source, data: data  }));
    }
    upload() {
        uploadFile([
            { name: 'avatar', filename: 'avatar.png', data: this.state.data }
        ])
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
}


const styles = StyleSheet.create ({
   button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      margin: 5
   }
})