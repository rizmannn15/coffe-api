import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';

const Home = ({navigation}) => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/rizmannn15/coffe-api/refs/heads/main/datacoffe.json')
    .then((response) => response.json())
    .then((hasil) => setData(hasil))
    .catch(error => {console.log(error); })
  }, []);
  
  const listCoffee = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('Detail', { coffee : item })}>
        <Card style={styles.cardUtama}>
          <View style={styles.cardView}>
              <Image 
                style={styles.imageCoffee} 
                source={{uri: item.thumbnail}}
              />
              <View style={{marginLeft: 12, flex: 1}}>
                  <Text style={styles.titleText}>{item.nama}</Text>
                  <Text style={styles.descText} numberOfLines={2}>
                    {item.deskripsi}
                  </Text>
              </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <LinearGradient colors={['#f7f3ee', '#e5d2c2']} style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to MyCoffee</Text>
        <Text style={styles.headerSubtitle}>Find your perfect coffee today</Text>
      </View>

      <FlatList 
        data={data}
        renderItem={listCoffee}
        keyExtractor={item=>item.id} 
        contentContainerStyle={{padding: 10}}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8c7b75',
    marginTop: 4,
  },
  cardUtama: {
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardView: {
    flexDirection: 'row',
    padding: 12
  },
  imageCoffee: {
    width: 80, 
    height: 80, 
    borderRadius: 12,
  },
  titleText: { 
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    color: '#4b3b2f'
  },
  descText: { 
    fontSize: 14,
    color: '#7a6a58',
    lineHeight: 20
  },
});

export default Home;
