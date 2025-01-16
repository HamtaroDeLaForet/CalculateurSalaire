import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddMissionScreen({ navigation }: any) {
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = () => {
    const salary = parseFloat(hours) * parseFloat(rate);
    console.log('Salaire calculé : ', salary);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une Mission</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre d'heures"
        keyboardType="numeric"
        value={hours}
        onChangeText={setHours}
      />
      <TextInput
        style={styles.input}
        placeholder="Taux horaire (€)"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <Button title="Calculer le Salaire" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
