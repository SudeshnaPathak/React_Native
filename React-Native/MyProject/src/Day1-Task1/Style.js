import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    backgroundColor: '#583b98',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:15
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  welcomeBanner:{
    backgroundColor: '#F5F2FC',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 12,
    margin: 10,
    gap: 10
  },
  welcomeTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#330542'
  },
  welcomeSub: { 
    fontSize: 14, 
    color: '#3d2c2c', 
    marginTop: 3 
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }
})

export default styles;