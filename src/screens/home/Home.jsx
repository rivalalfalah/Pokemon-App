import ToolbarAndroid from '@react-native-community/toolbar-android';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ListPokemon from '../../components/ListPokemon';
import {GetPokemon} from '../../utils/axios';
import {
  verticalScale,
} from '../../helpers/Metrick';

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    GetPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=25`)
      .then(res => {
        setData([...data, ...res.data.results]);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [offset]);

  // useEffect(() => {
  //   get()
  // }, [offset])

  const next = () => {
    setOffset(offset + 25);
  };

  const renderedItems = ({item}) => {
    return (
      <ListPokemon
        key={item.url}
        name={item.name}
        image={
          item.url.length - 1 === 36
            ? item.url.slice(34, 36)
            : item.url.length - 1 === 37
            ? item.url.slice(34, 37)
            : item.url.slice(34, 35)
        }
      />
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={{marginBottom: verticalScale(50)}}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderedItems}
        onEndReached={next}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
        keyExtractor={data => data.url}
      />
    </SafeAreaView>
  );
}

export default Home;
