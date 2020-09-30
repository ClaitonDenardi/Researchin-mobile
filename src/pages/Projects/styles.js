import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    backgroundColor: "#202024"
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#FFF'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF'
  },

  projectList: {
    marginTop: 32
  },

  project: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#d8d8e3',
    marginBottom: 16
  },

  projectProperty: {
    fontSize: 14,
    fontSize: 14,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#41414d'
  },

  projectValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#FF7161',
    fontSize: 15,
    fontWeight: 'bold'
  }
})