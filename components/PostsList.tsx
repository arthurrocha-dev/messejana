import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { ThemedView } from "@/components/ThemedView";
import { HomeScreenNavigationProp, RootStackParamList } from "@/app/type";
import { usePostsContext } from "@/contexts/PostsProvider";
import Header from "@/components/Header";
import { PostItem } from "@/components/PostItem";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

type PostListProps = {
  navigation?: HomeScreenNavigationProp;
};

export default function PostList({ navigation }: PostListProps) {
  const { posts, loading, error, filterPosts, toggleFavorite, favorites } =
    usePostsContext();

  if (loading) {
    return (
      <Container style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={styles.center}>
        <Text>Erro ao carregar as postagens</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Início" onSearch={filterPosts} />
      <ThemedView>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostItem
              post={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          )}
        />
      </ThemedView>
    </Container>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
