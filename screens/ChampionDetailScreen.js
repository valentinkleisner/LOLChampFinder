
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ChampionDetailScreen({ route }) {
  const { champion } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${champion.image.full}` }}
        style={styles.image}
      />
      <Text style={styles.name}>{champion.name}</Text>
      <Text style={styles.title}>{champion.title}</Text>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Attack:</Text>
          <Text style={styles.statValue}>{champion.info.attack}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Defense:</Text>
          <Text style={styles.statValue}>{champion.info.defense}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Magic:</Text>
          <Text style={styles.statValue}>{champion.info.magic}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Difficulty:</Text>
          <Text style={styles.statValue}>{champion.info.difficulty}</Text>
        </View>
      </View>
      <Text style={styles.blurb}>{champion.blurb}</Text>
      {champion.spells && (
      <View style={styles.spells}>
        {champion.spells.map((spell, index) => (
          <View key={index} style={styles.spell}>
            <Image
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${spell.image.full}` }}
              style={styles.spellImage}
            />
            <View style={styles.spellInfo}>
              <Text style={styles.spellName}>{spell.name}</Text>
              <Text style={styles.spellDescription}>{spell.description}</Text>
            </View>
          </View>
        ))}
      </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 16,
    color: '#333',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  blurb: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333',
  },
  spells: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  spell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  spellImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  spellInfo: {
    flex: 1,
  },
  spellName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  spellDescription: {
    fontSize: 14,
    color: '#333',
  },
});