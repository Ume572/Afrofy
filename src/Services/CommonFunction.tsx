import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { getDataWithToken } from "../Services/mobile-api";
import { mobile_siteConfig } from "../Services/mobile-siteConfig";



//-------------------------------------------------------- async storage:----------------------------------------------------------------
export const storeDataToAsyncStorage = async (indexName,value) => {
    let incomingData = JSON.stringify(value);
    try {
        await AsyncStorage.setItem(indexName, incomingData);
    } catch (error) {
        console.error("Error storing token:", error);
    }
}
export const getDataFromAsyncStorage = async (indexName) => {
    try {
        var value = await AsyncStorage.getItem(indexName);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.error("Error storing token:", error);
    }
}

    export const removeDataFromAsyncStorage = async (indexName) => {
        try {
            var value = await AsyncStorage.removeItem(indexName);
            if (value !== null) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.error("Error storing token:", error);
        }
};



const styles = StyleSheet.create({
   
}) 