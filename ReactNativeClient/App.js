/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import IssueList from './IssueList.js';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { styles } from './IssueList';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navText}>Issue Tracker</Text>
        </View>
        <ScrollView>
          <IssueList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
