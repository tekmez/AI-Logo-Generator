import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
import BgGradient from "@/components/bg-gradient";
import { Image } from "expo-image";
import DetailPrompt from "@/components/details/detail-prompt";
import DetailHeader from "@/components/details/detail-header";
export default function DetailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <BgGradient style={StyleSheet.absoluteFill} />
      <View className="flex-1 px-6">
        <DetailHeader />
        <Image
          source={require("@/assets/images/example.jpeg")}
          style={{
            width: Dimensions.get("window").width - 48,
            height: Dimensions.get("window").width - 48,
            borderRadius: 16,
            alignSelf: "center",
            marginBottom: 24,
          }}
          contentFit="contain"
        />
        <DetailPrompt />
      </View>
    </SafeAreaView>
  );
}
