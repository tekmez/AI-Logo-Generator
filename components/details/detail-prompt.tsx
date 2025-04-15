import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";

const DetailPrompt = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <LinearGradient
      colors={["#27272A", "#943DFF", "#2938DC"]}
      start={{ x: 0, y: 2 }}
      end={{ x: 20, y: 10 }}
      style={{
        borderRadius: 12,
        padding: 12,
      }}
    >
      <View className="gap-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-base font-manrope-bold">Prompt</Text>
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center gap-[6px]"
          >
            <Octicons name="copy" size={16} color="#A1A1AA" />
            <Text className="text-gray-400 text-xs font-manrope-regular">
              Copy
            </Text>
          </Pressable>
        </View>
        <Text className="text-[#FAFAFA] text-base font-manrope-regular">
          A professional logo for Harrison & Co. Law Firm, using balanced serif
          fonts
        </Text>
        <Text className="text-[#FAFAFA] text-xs font-manrope-regular py-1 px-2 rounded-full bg-[#FAFAFA1A] w-[76px] h-[23px] text-center">
          Monogram
        </Text>
      </View>
    </LinearGradient>
  );
};

export default DetailPrompt;
