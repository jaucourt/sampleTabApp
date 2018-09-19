import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  // this version fails because styles is not defined...
  //<View style={[styles.container, { backgroundColor: '#ff4081' }]} />

  // so I use this:
  <View style={[{}, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  // this version fails because styles is not defined...
  //<View style={[styles.container, { backgroundColor: '#673ab7' }]} />

  // so I use this:
  <View style={[{}, { backgroundColor: '#673ab7' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}