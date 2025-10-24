import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

type FrogProps = {
  num: number;
  color: string;
};

const Frog = (props: FrogProps) => {
  return (
    <View style={[styles.frog, { backgroundColor: props.color }]}>
      <Text style={styles.frogText}>{props.num}</Text>
    </View>
  );
};

type PressButtonProps = {
  num: number;
  pressHandler: (n: number) => void;
  isActive: boolean;
};

const PressButton = (props: PressButtonProps) => {
  return (
    <Pressable
      onPress={() => {
        props.pressHandler(props.num);
      }}
      style={[styles.button, props.isActive && styles.activeButton]}
    >
      <Text style={[styles.textbutton, props.isActive && styles.activeText]}>
        {props.num}
      </Text>
    </Pressable>
  );
};

const Lake = () => {
  const [exNumber, setExNumber] = useState(1);

  let lakeStyle;
  
  if (exNumber < 10) {
    const styleKey = `ex0${exNumber}` as keyof typeof styles;
    lakeStyle = StyleSheet.compose(styles.lake, styles[styleKey]);
  } else {
    const styleKey = `ex${exNumber}` as keyof typeof styles;
    lakeStyle = StyleSheet.compose(styles.lake, styles[styleKey]);
  }

  // Формирование списка кнопок в цикле
  let i = 2;
  let pressButtons: React.ReactElement = (
    <PressButton num={1} pressHandler={setExNumber} isActive={exNumber === 1} />
  );
  
  const excludedLevels = [14, 15, 16, 17, 20];
  
  while (i <= 24) {
    if (!excludedLevels.includes(i)) {
      pressButtons = (
        <>
          {pressButtons}
          <PressButton num={i} pressHandler={setExNumber} isActive={exNumber === i} />
        </>
      );
    }
    i++;
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Flexbox Лягушки</Text>
      
      <View style={lakeStyle}>
        <Frog num={1} color="#ff6b6b" />
        <Frog num={2} color="#ffd93d" />
        <Frog num={3} color="#6bcf7f" />
      </View>

      <View style={styles.buttons}>{pressButtons}</View>

      <Text style={styles.info}>Текущая задача = {exNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  lake: {
    flex: 1,
    backgroundColor: '#a8dadc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#457b9d',
  },
  frog: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  frogText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
    marginBottom: 15,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#adb5bd',
  },
  activeButton: {
    backgroundColor: '#4dabf7',
    borderColor: '#1971c2',
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  activeText: {
    color: '#fff',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    color: '#495057',
    fontWeight: '600',
  },
  
  // Стили для заданий
  ex01: {
    justifyContent: 'flex-end',
  },
  ex02: {
    justifyContent: 'center',
  },
  ex03: {
    justifyContent: 'space-around',
  },
  ex04: {
    justifyContent: 'space-between',
  },
  ex05: {
    alignItems: 'flex-end',
  },
  ex06: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ex07: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  ex08: {
    flexDirection: 'row-reverse',
  },
  ex09: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ex10: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  ex11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ex12: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ex13: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ex18: {
    flexDirection: 'row',
  },
  ex19: {
    flexDirection: 'row-reverse',
  },
  ex21: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ex22: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ex23: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ex24: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

export default Lake;