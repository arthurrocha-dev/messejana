import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export type RootStackParamList = {
  Root: undefined;
  PostDetails: { postId: number };
  UserProfile: undefined;
  CreatePost: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Root"
>;

export type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;
