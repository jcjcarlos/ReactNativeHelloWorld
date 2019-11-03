/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;

class MyImage extends Component{

  componentDidMount(){
    setInterval(() => (this.setState(previousState => (
      {isActive: !previousState.isActive}
    ))
    ),1000);
  }

  state = {isActive:true};

  render(){
    let pic = {
      uri: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Namibian_Bushmen_Girls.JPG"
    };
    if (!this.state.isActive)
      return (<Image source={pic} style={{width:300, height:225}}/>);
    return (
      <Image source={{uri: this.props.src}} style={{width: 283, height: 216}}/>
     // <Text>{this.props.src}</Text>
    );
  }
}

class SpecialText extends Component
{

  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        {isActive: !previousState.isActive}
      ))
    ),5000);
  }
  
  state = {isActive: true};

  render()
  {
    if (!this.state.isActive)   
      return null;

    return (<Text>{this.props.text}</Text>);
  }
}

export default class HelloWorldApp extends Component
{
  render(){
    let pic = {uri:"https://ic.c4assets.com/brands/how-the-other-kids-live/75edcafe-1de0-422e-aea0-04039fee84bc.jpg?interpolation=progressive-bicubic&output-quality=90"};
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center" }}>
        <Text>Olá</Text>
        <MyImage src="https://ic.c4assets.com/brands/how-the-other-kids-live/75edcafe-1de0-422e-aea0-04039fee84bc.jpg?interpolation=progressive-bicubic&output-quality=90"/>
        <SpecialText text="Bem-vindo ao aplicativo"/>
      </View>
    );
  }

}

