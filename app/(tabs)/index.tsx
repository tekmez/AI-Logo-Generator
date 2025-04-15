import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import BgGradient from "@/components/bg-gradient";
import Header from "@/components/header";
import CreateButton from "@/components/create-button";

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
      <CreateButton onPress={handleCreate} />
    </SafeAreaView>
  );
}
