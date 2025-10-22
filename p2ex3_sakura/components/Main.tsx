import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AddForm from "../components/AddForm";

export interface Article {
  key: string;
  name: string;
  anons: string;
  full: string;
  img: string;
}

type MainProps = {
  navigation: any;
};

export default function Main(props: MainProps) {
  const [news, setNews] = useState<Article[]>([
    {
      key: "1",
      name: "Google",
      anons: "Гугл - крупнейшая поисковая система",
      full: "Полный текст статьи про Google. Google LLC — американская транснациональная корпорация...",
      img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400",
    },
    {
      key: "2",
      name: "Apple",
      anons: "Apple - технологический гигант",
      full: "Полный текст статьи про Apple. Apple Inc. — американская корпорация, производитель компьютеров...",
      img: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400",
    },
    {
      key: "3",
      name: "Facebook",
      anons: "Facebook - социальная сеть",
      full: "Полный текст статьи про Facebook. Meta Platforms (Facebook) — крупнейшая социальная сеть...",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
    },
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const loadScene = (item: Article): void => {
    props.navigation.navigate("FullArticleScreenName", item);
  };

  function addArticle(newArticle: Omit<Article, "key">): void {
    setNews((list) => {
      const newArticleWithKey: Article = {
        ...newArticle,
        key: Math.random().toString(),
      };
      return [newArticleWithKey, ...list];
    });
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Добавить статью</Text>
            <AntDesign
              name="close-circle"
              size={32}
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <AddForm addArticle={addArticle} />
        </View>
      </Modal>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => loadScene(item)}
          >
            <Image
              style={styles.img}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add-circle" size={50} color="green" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  item: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  img: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 15,
    paddingBottom: 5,
    fontFamily: "onest-bold",
  },
  anons: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingBottom: 15,
    color: "#666",
    fontFamily: "onest-reg",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "onest-bold",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});