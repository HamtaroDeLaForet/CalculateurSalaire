import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ViewSalaryScreen({navigation} : any){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Salaire Total :</Text>
            <Text style={styles.amount}>xxxx €</Text>
            <Text style={styles.label}>Nombre d'heure travaillées</Text>
            <Text style={styles.amount}>xxx H</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginTop: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    amount: {
      fontSize: 24,
      color: 'green',
    },
  });