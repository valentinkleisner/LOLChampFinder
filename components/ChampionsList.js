import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChampionsList = ({champions}) => {
  const navigation = useNavigation();

  const handleChampionPress = (champion) => {
    navigation.navigate('championDetails', { champion });
  };

  return (
    <ScrollView>
      {champions.map((champion) => (
        <TouchableOpacity key={champion.id} style={styles.championContainer} onPress={() => handleChampionPress(champion)}>
          <Image source={{ uri: `http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${champion.image.full}` }} style={styles.championImage} />
          <View style={styles.titleContainer}>
            <Text style={styles.championName}>{champion.name}</Text>
            <Text style={styles.championBlurb}>{champion.blurb}</Text>
          </View>   
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    championContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    titleContainer: {
      flexDirection: 'column',
    },
    championImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    championName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    championBlurb: {
      fontSize: 12,
      width:250,
    },
  });
export default ChampionsList;