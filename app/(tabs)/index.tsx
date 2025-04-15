import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import BgGradient from "@/components/bg-gradient";
import Header from "@/components/header";
import CreateButton from "@/components/create-button";
import PromptSection from "@/components/prompt-section";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <BgGradient style={StyleSheet.absoluteFill} />
      <Header />
      <View className="px-6">
        <PromptSection />
      </View>
      <CreateButton />
    </SafeAreaView>
  );
}
