import React from 'react';

const ListInfo = props => {
  return (
    <View>
      <Text style={styles.font}>props.title</Text>
        {props.item((item,index) => (
            <Text key={index} style={styles.font}>
            {props.opening} : {item.type.name}
          </Text>
        ))}
    </View>
  );
};

export default ListInfo;
