import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MOBILE</Text>
            <Text style={styles.description}>Atividade 03 - Componentes básicos</Text>
            <TextInput placeholder="Insira seu nome aqui!" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.botao}> Editar </TouchableOpacity>
            <TouchableOpacity style={styles.botao2}> Enviar </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "70%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  botao: {
    backgroundColor: "#FF00FF",
    color: "#fff",
    padding: 15, 
    borderRadius: 90,
    alignItems: "center",
    marginBottom: 10,
    width: "50vh",
  },
  botao2: {
    backgroundColor: "#87b344",
    padding: 15, 
    borderRadius: 100,
    alignItems: "center",
    width: "50vh",
    color: "#fff",
  },
});