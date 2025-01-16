import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SalarySummary({ total }: { total: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Salaire Total :</Text>
      <Text style={styles.amount}>{total} €</Text>
    </View>
  );
}

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
