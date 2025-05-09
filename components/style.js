import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  caloriaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  caloriaIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  caloria: {
    fontSize: 14,
    color: '#777'
  },
  preco: {
    fontSize: 16,
    color: '#FFA500',
    fontWeight: 'bold'
  },
  imagem: {
    width: 70,
    height: 70
  }
});

export default styles;