import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from '../../helpers/Metrick';

function Detail() {
  const pokemon = useSelector(state => state.action.pokemon);
  const [types, setTypes] = useState(false);
  const [moves, setMoves] = useState(false);
  const [stats, setStats] = useState(false);
  const [ability, setAbility] = useState(false);

  const clickTypes = () => {
    setTypes(types => !types);
  };
  const clickMoves = () => {
    setMoves(moves => !moves);
  };
  const clickStats = () => {
    setStats(stats => !stats);
  };
  const clickAbility = () => {
    setAbility(ability => !ability);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.name}>
            <Text style={styles.font}>{pokemon.name}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{uri: pokemon.image.front}}
                style={{
                  width: horizontalScale(150),
                  height: verticalScale(200),
                }}
              />
              <Text style={styles.font}>FRONT</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{uri: pokemon.image.back}}
                style={{
                  width: horizontalScale(150),
                  height: verticalScale(200),
                }}
              />
              <Text style={styles.font}>BACK</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:verticalScale(50),marginBottom:verticalScale(20)}}>
            <Text style={styles.font}>Pokemon Details</Text>
          </View>
          <View>
            <Text style={styles.font}>height : {pokemon.height/10} M</Text>
            <Text style={styles.font}>weight : {pokemon.weight/10} Kg</Text>
            <Text style={styles.font}>base Experience : {pokemon.baseExp}</Text>
          </View>
          {pokemon.types && (
            <TouchableOpacity onPress={clickTypes} style={styles.box}>
              <Text style={styles.font}>Pokemon Types :</Text>
              {pokemon.types &&
                types &&
                pokemon.types.map(item => (
                  <Text key={item.slot} style={styles.font}>
                    slot {item.slot} : {item.type.name}
                  </Text>
                ))}
            </TouchableOpacity>
          )}
          {pokemon.stats && (
            <TouchableOpacity onPress={clickStats} style={styles.box}>
              <Text style={styles.font}>Stats :</Text>
              {pokemon.stats &&
                stats &&
                pokemon.stats.map(item => (
                  <Text key={item.stat.name} style={styles.font}>
                    {item.stat.name} : {item.base_stat}
                  </Text>
                ))}
            </TouchableOpacity>
          )}
          {pokemon.moves && (
            <TouchableOpacity onPress={clickMoves} style={styles.box}>
              <Text style={styles.font}>Pokemon Moves :</Text>
              {pokemon.moves &&
                moves &&
                pokemon.moves.map((item, index) => (
                  <Text key={index} style={styles.font}>
                    move {index + 1} : {item.move.name}
                  </Text>
                ))}
            </TouchableOpacity>
          )}
          {pokemon.abilities && (
            <TouchableOpacity onPress={clickAbility} style={styles.box}>
              <Text style={styles.font}>Pokemon Ability :</Text>
              {pokemon.abilities &&
                ability &&
                pokemon.abilities.map(item => (
                  <Text key={item.slot} style={styles.font}>
                    ability slot {item.slot} : {item.ability.name}
                  </Text>
                ))}
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  font: {color: 'black', fontSize: moderateScale(20), fontWeight: '700'},
  name: {justifyContent: 'center', flexDirection: 'row'},
  container: {
    margin: moderateScale(10),
  },
  box: {
    backgroundColor: 'grey',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
  },
});
