import React from "react";
import { View, SafeAreaView, Text,Dimensions, StyleSheet,TouchableHighlight, YellowBox} from "react-native";

const App = () => {
    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1, backgroundColor:"red"}} >
                <View style={{flex: 1, flexDirection:"row", backgroundColor: "gray", margin:20}} >
                    <View style={styles.circle}>
                        <Text style={{fontWeight:"bold",alignSelf:"center"}} >Orange Circle</Text>   
                    </View>
                    <View style={styles.elips}>
                        <Text style={{fontWeight:"bold", alignSelf:"center"}} >Yellow Box</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:2, backgroundColor:"pink", flexDirection:"row"}} >
                <View style={{backgroundColor:"black", flex:2, borderRadius:30, margin:20, justifyContent:"center"}}>
                    <Text style={{color:"white", alignSelf:"center"}} >Black Box</Text>
                </View>
                <View style={{backgroundColor:"brown", flex:1, borderRadius:30, margin:10, flexDirection:"row",}} >
                    <Text style={{transform: [{ rotate: '-90deg'},], color:"white", flex:1, alignSelf:"center",  fontWeight:"bold"}}>Brown</Text>
                    <Text style={{transform: [{ rotate: '-90deg'},], color:"white", flex:1, alignSelf:"center",  fontWeight:"bold"}}>Box</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create ({
    circle: {
        flex:1,
        backgroundColor: "#fb8c00",
        height:90,
        borderRadius:100,
        alignSelf:"center",
        marginLeft:20,
        justifyContent:"center"
    },
    elips: {
        borderColor:"black",
        flex:1,
        backgroundColor:"yellow",
        height:40,
        borderRadius:40,
        alignSelf:"center",
        marginLeft:80,
        justifyContent:"center",
        marginRight:30
    }

})
 