import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png'
import styles from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadProjects() {
    if (loading) {
      return;
    }

    if (total > 0 && projects.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('projects', {
      params: { page }
    });

    setProjects([...projects, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function navigateToDetail(project) {
    navigation.navigate('Detail', { project });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} projetos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos projetos e entre em contato com o professor.</Text>

      <FlatList
        style={styles.projectList}
        data={projects}
        keyExtractor={project => String(project.id)}
        shadowsVerticalScrollIndicator={false}
        onEndReached={loadProjects}
        onEndReachedThreshold={0.2}
        renderItem={({ item: project }) => (
          <View style={styles.project}>
            <Text style={styles.projectProperty}>
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
              BOLSA:
            </Text>
            <Text style={styles.projectValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(project.holder)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(project)}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>
              <Feather name="arrow-right" size={16} color="#FF7161" />
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}
