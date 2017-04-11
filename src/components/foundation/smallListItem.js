import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, Image } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let listItemHeight = ScreenHeight * .12;

const SmallListItem = (props) => {
    const { moreIcon, onSelect, id, lessIcon, moreInfoId, onMoreInfo } = props;
    return (
            <View style={styles.listItem}>
                <View style={styles.mainItem}>
                    <TouchableOpacity
                        onPress={() => props.onMoreInfo(id)}
                    >
                    {moreInfoId === id ? (
                        <Image
                            source={lessIcon}
                            style={styles.icon}
                        />
                    ) : (
                        <Image
                            source={moreIcon}
                            style={styles.icon}
                        />
                    )}
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.onSelect(id)}
                    >
                        <Text style={styles.itemText}>{props.name}</Text>
                    </TouchableOpacity>
                </View>
                {moreInfoId === id &&
                    <View style={styles.moreInfo}>
                        <View style={styles.infoItem}>
                            <Text style={styles.moreInfoText}>Description: </Text>
                            <Text >{props.description}</Text> 
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.moreInfoText}>Type: </Text>
                            <Text>{props.type}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.moreInfoText}>Points per Set: </Text> 
                            <Text>{props.points}</Text>
                        </View>
                    </View>  
                }
            </View>
    );
}

export default SmallListItem;

const styles = StyleSheet.create({
     listItem: {
        flexDirection: 'column',
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 2,
    },
    mainItem: {
        height: listItemHeight,
        flexDirection: 'row',
        alignItems: 'center',
    },
    moreInfo: {
        
    },
    infoItem: {
        flexDirection: 'row',
        marginLeft: 55,
        marginRight: 15,
        flexWrap: 'wrap',
        marginBottom: 10
    },
    moreInfoText: {
        fontWeight: 'bold'
    },
    icon: {
        height: ScreenWidth * .06,
        width: ScreenWidth * .06,
        marginLeft: 15,
        marginRight: 20
    },
    itemText: {
        color: "black",
        fontSize: 20,
    }
});