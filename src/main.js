import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import SetupIndex from './components/setup';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ListScreen from './components/foundation/listScreen';
import ListViewExample from './components/foundation/listViewExample';
import store from './store';

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>  
                <ScrollableTabView
                    tabBarPosition="bottom"
                    tabBarBackgroundColor="#ff795b"
                >
                    <View tabLabel="HOME">
                        <Text> home </Text>
                    </View>
                    <ListScreen tabLabel="SETUP"/>
                    <ListViewExample tabLabel="LIST" />
                </ScrollableTabView>
            </Provider>
        );
    }
}