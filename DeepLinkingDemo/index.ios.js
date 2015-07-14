/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
 
var LinkingIOS = require('LinkingIOS');
var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
} = React;
 

var DeepLinkingDemo = React.createClass({


  getInitialState: function() {
    return { message:'nothing to show'};
  },
 
  componentDidMount: function() {
    LinkingIOS.addEventListener('url', this._processURL);
    var url = LinkingIOS.popInitialURL();  
    if(url) this._processURL(url);  
  },
 
  componentWillUnmount: function() {
    LinkingIOS.removeEventListener('url', this._processURL);
  },
 
  _processURL: function(e) {


    var url = e.url.replace('goldfingr://', '').split('?');
    var path = url[0];

    var logMsg ='url[0]:'+url[0]+' url[1]'+url[1];
    
     console.log(logMsg);


     this.setState({message: logMsg });
    
  },
 
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Deep Linking Demo
        </Text>
        <Text style={styles.message}>
            {this.state.message}!!
        </Text>
    
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#FF8000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DeepLinkingDemo', () => DeepLinkingDemo);
