import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import { useDispatch } from 'react-redux';
import action from '../redux/actions/actions';
import {useNavigation} from '@react-navigation/native';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../helpers/Metrick';

const ListPokemon = props => {
  const navigate = useNavigation();
  const dispatch = useDispatch()

  const touchDetail = () => {
    console.log(props.image)
    dispatch(action.DetailThunk(props.image))
    navigate.navigate('Detail')
  }
  return (
    <TouchableOpacity onPress={touchDetail}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'grey',
          marginVertical: verticalScale(20),
          marginHorizontal:horizontalScale(10),
          borderRadius:moderateScale(20),
          padding:moderateScale(5)
        }}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.image}.png`,
          }}
          style={{width: horizontalScale(100), height: verticalScale(100)}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: moderateScale(20),
            fontWeight: '700',
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListPokemon;
