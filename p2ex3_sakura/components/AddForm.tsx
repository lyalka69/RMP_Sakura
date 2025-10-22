import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { Article } from "./Main";

type AddFormProps = {
  addArticle: (article: Omit<Article, "key">) => void;
};

export default function AddForm(props: AddFormProps) {
  const onFormikSubmitHandler = (
    values: Omit<Article, "key">,
    action: any
  ): void => {
    console.log("onFormikSubmitHandler values", values);
    props.addArticle(values);
    action.resetForm();
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          anons: "",
          full: "",
          img: "",
        }}
        onSubmit={onFormikSubmitHandler}
      >
        {(formikProps) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Название статьи:</Text>
            <TextInput
              style={styles.input}
              value={formikProps.values.name}
              placeholder="Введите название"
              onChangeText={formikProps.handleChange("name")}
            />

            <Text style={styles.label}>Краткое описание:</Text>
            <TextInput
              style={styles.input}
              value={formikProps.values.anons}
              placeholder="Введите анонс"
              onChangeText={formikProps.handleChange("anons")}
              multiline
            />

            <Text style={styles.label}>Полный текст:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formikProps.values.full}
              placeholder="Введите полный текст статьи"
              onChangeText={formikProps.handleChange("full")}
              multiline
              numberOfLines={5}
            />

            <Text style={styles.label}>URL картинки:</Text>
            <TextInput
              style={styles.input}
              value={formikProps.values.img}
              placeholder="https://example.com/image.jpg"
              onChangeText={formikProps.handleChange("img")}
            />

            <Pressable
              onPress={formikProps.handleSubmit as () => void}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Сохранить статью</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 10,
    fontFamily: "onest-bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    fontFamily: "onest-reg",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#3949AB",
    padding: 18,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "onest-bold",
  },
});