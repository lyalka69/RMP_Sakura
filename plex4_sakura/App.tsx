import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        Я {props.name}, и я сейчас {isHungry ? 'голоден' : 'сыт'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Дай мне еды, пожалуйста!' : 'Спасибо!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={{ padding: 20 }}>
      <Cat name="Дуся" />
      <Cat name="Тоша" />
      <Cat name="Кузя" />
    </View>
  );
};

export default Cafe;