import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";

type FullArticleProps = {
  navigation: any;
  route: any;
};

export default function FullArticle(props: FullArticleProps) {
  const goBack = (): void => {
    props.navigation.goBack();
  };

  const article = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: article.img,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{article.name}</Text>
        <Text style={styles.anons}>{article.anons}</Text>
        <Text style={styles.full}>{article.full}</Text>

        <Pressable style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Назад</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "onest-bold",
  },
  anons: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    fontFamily: "onest-reg",
  },
  full: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    fontFamily: "onest-reg",
  },
  button: {
    backgroundColor: "#3949AB",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "onest-bold",
  },
});