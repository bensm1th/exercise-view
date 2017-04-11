import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, Image } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let listWidth = ScreenWidth * .8;
let listTop = ScreenHeight * .09;
let listLeftOffset = ScreenWidth * .1;
let listItemHeight = ScreenHeight * .12;
let checkBoxLength = listItemHeight * .2;

const ListItem = (props) => {
    const { selected, index, icon, rightIcon } = props;
    const item = selected ? styles.listItemSelected : styles.listItem;
    const checkBox = selected ? styles.listItemCheckBoxSelected : styles.listItemCheckBox;
    const itemText = selected ? styles.listItemSelectedText : styles.listItemText;

    return (
        <TouchableOpacity
            onPress={() => props.onSelect(index)}
        >
            <View style={item}>
                <Image
                    source={icon}
                    style={styles.icon}
                />
                <Text style={itemText}>{props.listText}</Text>
                <View style={styles.rightIconContainer}>
                    <Image
                        source={rightIcon}
                        style={styles.rightIcon}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;

const styles = StyleSheet.create({
     listItem: {
        backgroundColor: "#ffffff",
        height: listItemHeight,
        flexDirection: 'row',
        position: 'relative',
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 2,
    },
    icon: {
        height: ScreenWidth * .1,
        width: ScreenWidth * .1,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 20
    },
    rightIcon: {
        height: ScreenWidth * .07,
        width: ScreenWidth * .07,
        marginLeft: 15,
        marginRight: 20
    },
    rightIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    listItemCheckBox: {
        height: checkBoxLength,
        width: checkBoxLength,
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 25,
        marginLeft: 15,
        marginRight: 20
    },
    listItemCheckBoxSelected: {
        height: checkBoxLength,
        width: checkBoxLength,
        backgroundColor: "#0043cb",
        marginTop: 25,
        marginLeft: 15,
        marginRight: 20
    },
    listItemText: {
        color: "black",
        fontSize: 20,
        marginTop: 17
    },
    listItemSelected: {
        backgroundColor: "#536dff",
        height: listItemHeight,
        flexDirection: 'row',
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 2
    },
    listItemSelectedText: {
        color: 'black',
        fontSize: 20,
        marginTop: 17
    },
})