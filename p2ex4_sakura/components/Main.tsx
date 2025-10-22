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
      name: "«28 лет спустя». 28 дней после мировой премьеры – и в Приднестровье",
      anons: "Показ долгожданного продолжения киноклассики «28 лет спустя» в Приднестровье состоится с задержкой - 19 июля.",
      full: "Показ долгожданного продолжения киноклассики «28 лет спустя» в Приднестровье состоится с задержкой - 19 июля. Почти на месяц позже, чем во всем остальном мире. Фильм, который ждали фанаты по всему миру, наконец добрался и до местных кинотеатров. Это третья часть культовой франшизы о постапокалиптическом мире, где вирус превратил людей в агрессивных существ.",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    },
    {
      key: "2",
      name: "Где освежиться этим летом в Тирасполе и Бендерах",
      anons: "Лето набирает обороты, а значит — пора искать места, где можно охладиться, расслабиться и провести день у воды.",
      full: "Лето набирает обороты, а значит — пора искать места, где можно охладиться, расслабиться и провести день у воды. Мы собрали для вас подборку бассейнов в Тирасполе и Бендерах. От открытых аквазон до крытых комплексов — каждый найдет место по душе. Где можно поплавать с семьей, где провести активный день с друзьями, а где просто отдохнуть в тишине — всё это в нашем обзоре.",
      img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400",
    },
    {
      key: "3",
      name: "Новый учебный год в Приднестровье: поддержка для детей и родителей",
      anons: "Подготовка к школе и новому учебному году - всегда непростое испытание для семей.",
      full: "Подготовка к школе и новому учебному году - всегда непростое испытание для семей. В Приднестровье действует целый комплекс мер поддержки: от финансовой помощи первоклассникам до льгот для многодетных семей. Государство предоставляет выплаты на школьную форму, учебники и канцелярские принадлежности. Также работают программы бесплатного питания для учеников начальных классов.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
    },
    {
      key: "4",
      name: "Поколение на нейросетях: прогресс или деградация?",
      anons: "«Они не учатся — они просто спрашивают у ChatGPT». Сегодня это уже не шутка, а тревожный диагноз.",
      full: "«Они не учатся — они просто спрашивают у ChatGPT». Сегодня это уже не шутка, а тревожный диагноз, который всё чаще ставят школьникам и студентам. Нейросети изменили образование: одни говорят о революции в обучении, другие — о деградации критического мышления. Что происходит, когда искусственный интеллект становится главным помощником в учебе? Разбираемся в плюсах и минусах нового поколения учащихся.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
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