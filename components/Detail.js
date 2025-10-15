import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const Detail = ({ route, navigation }) => {
  const { coffee } = route.params;
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f7f3ee' }}>
      <LinearGradient
        colors={["#6F4E37", "#A0826D"]}
        style={{ height: 250, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      >
        <Image 
          style={styles.posterImage} 
          source={{ uri: coffee.poster }}
          resizeMode="cover"
        />
      </LinearGradient>

      <View style={{ alignItems: "center", marginTop: -60 }}>
        <Image 
          style={styles.thumbnailImage} 
          source={{ uri: coffee.thumbnail }}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 15, marginHorizontal: 25 }}>
        <Title style={styles.title}>{coffee.nama}</Title>
        <View style={styles.separator} />
      </View>

      <Card style={styles.cardInfo}>
        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'flex-start' }}>
          <MaterialIcons name="description" size={28} color="#6F4E37" />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={styles.labelText}>Deskripsi</Text>
            <Text style={styles.descriptionText}>{coffee.deskripsi}</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.cardInfo}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <MaterialIcons name="local-cafe" size={28} color="#6F4E37" />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={styles.labelText}>Kategori</Text>
            <Text style={styles.infoText}>Premium Coffee</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.cardInfo}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <MaterialIcons name="star" size={28} color="#FFD700" />
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={styles.labelText}>Rating</Text>
            <Text style={styles.infoText}>⭐⭐⭐⭐⭐ (4.8/5.0)</Text>
          </View>
        </View>
      </Card>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: '#fff', borderColor: '#6F4E37', borderWidth: 1 }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={[styles.backText, { color: '#6F4E37' }]}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: 250,
    opacity: 0.85,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  thumbnailImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4b3b2f',
    textAlign: 'center',
    marginBottom: 8,
  },
  separator: {
    width: 60,
    height: 3,
    backgroundColor: '#C19A6B',
    borderRadius: 3,
    marginTop: 4,
  },
  cardInfo: {
    margin: 12,
    marginHorizontal: 20,
    borderRadius: 14,
    backgroundColor: '#fff',
    elevation: 3,
  },
  labelText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Detail;
