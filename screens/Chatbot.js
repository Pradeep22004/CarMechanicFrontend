import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    setChat([...chat, { sender: 'user', text: message }]);
    // Placeholder for chatbot response
    setChat([...chat, { sender: 'bot', text: `Diagnosing: ${message}` }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatBox}>
        {chat.map((msg, index) => (
          <Text key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </Text>
        ))}
      </View>
      <TextInput style={styles.input} value={message} onChangeText={setMessage} />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  chatBox: { flex: 1, marginBottom: 10 },
  userMessage: { textAlign: 'right', margin: 5 },
  botMessage: { textAlign: 'left', margin: 5 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});

export default Chatbot;
