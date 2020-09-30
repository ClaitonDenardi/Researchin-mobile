import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const project = route.params.project;
  const message = `Olá prof(a) ${project.name}, estou entrando em contato pois tenho interesse em me engajar no projeto ${project.title}!`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Aluno interessado: ${project.title}`,
      recipients: [project.email],
      body: message
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <TouchableOpacity style={styles.headerButton} onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#FF7161" />
          <Text style={styles.headerButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.project}>

        <Text style={[styles.projectProperty, { marginTop: 0 }]}>
          PROFESSOR:
        </Text>
        <Text style={styles.projectValue}>
          {project.name}
        </Text>

        <Text style={styles.projectProperty}>
          PROJETO:
        </Text>
        <Text style={styles.projectValue}>
          {project.title}
        </Text>

        <Text style={styles.projectProperty}>
          DESCRIÇÃO:
        </Text>
        <Text style={styles.projectValue}>
          {project.description}
        </Text>

        <Text style={styles.projectProperty}>
          VALOR:
        </Text>
        <Text style={styles.projectValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(project.holder)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Ingresse no projeto.</Text>
        <Text style={styles.heroTitle}>Você só tem a ganhar!</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={sendMail}>
            <Text style={styles.actionText}>Enviar um e-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
