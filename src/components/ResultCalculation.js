import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const {capital,interest, months,total,errorMessage}= props;
    console.log(props);
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen</Text>

                    <DataResult title={"Cantidad solicitada:"} value={`${capital} $`}></DataResult>
                    <DataResult title={"Interes %:"} value={`${interest} %`}></DataResult>
                    <DataResult title={"Plazos:"} value={`${months} meses`}></DataResult>
                    <DataResult title={"Pago mensual:"} value={`${total.monthlyFee} $`}></DataResult>
                    <DataResult title={"Total:"} value={`${total.totalPayable} $`}></DataResult>
                </View>
            )}
            <View >
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props){
    const{title,value}=props;
    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    error:{
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:15,
    },
    boxResult:{
        padding:30,
    },
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30,
    },
    content:{
        marginLeft:20,
    },
    value:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
    }
})
