import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import BgGradient from "@/components/bg-gradient";
import Header from "@/components/header";
import CreateButton from "@/components/create-button";
import PromptInput from "@/components/prompt-input";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("No Style"); // Default to 'No Style'

  const handleCreate = () => {
    // TODO: Implement create logic (e.g., API call)
    console.log("Create pressed", { prompt, selectedStyle });
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <BgGradient style={StyleSheet.absoluteFill} />
      <Header />
      <View className="px-6">
        <PromptInput
          prompt={prompt}
          onPromptChange={setPrompt}
          onSurpriseMe={() => setPrompt("Surprise me")}
        />
      </View>
      <CreateButton onPress={handleCreate} />
    </SafeAreaView>
  );
}
