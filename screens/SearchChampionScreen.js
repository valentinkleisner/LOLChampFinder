import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SearchBarComponent from '../components//SearchBarComponent';
import ChampionsList from "../components/ChampionsList";

export default function SearchChampionScreen() {
  const [clicked,setClicked] = React.useState(false)
  const [searchPhrase,setSearchPhrase] = React.useState("")
  const [champions, setChampions] = React.useState([]);
  const [filteredChampions, setFilteredChampions] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json`);
        const data = await response.json();
        setChampions(Object.values(data.data));
        setFilteredChampions(champions)
        };
        fetchData();
    }, []);

    React.useEffect(()=>{
      if(searchPhrase !== "") {
        const locfilteredChampions = champions.filter(champion => {
            return champion.name.toLowerCase().includes(searchPhrase.toLowerCase())
          });
          setFilteredChampions(locfilteredChampions);
      } else {
        setFilteredChampions(champions)
      }
      console.log(searchPhrase)
  },[searchPhrase])

  return (
      <View style={styles.container}>
        <SearchBarComponent searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked}/>
        <ChampionsList champions={filteredChampions}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
