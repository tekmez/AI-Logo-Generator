import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Stars from "@/assets/icons/stars";
interface CreateButtonProps {
  onPress: () => void;
}

export default function CreateButton({ onPress }: CreateButtonProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-3">
      <TouchableOpacity
        onPress={onPress}
        className="rounded-full overflow-hidden"
      >
        <LinearGradient
          colors={["rgba(41, 56, 220, 1)", "rgba(148, 61, 255, 1)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View className="flex-row items-center justify-center p-4 gap-3">
            <Text className="text-white text-lg font-bold mr-2">Create</Text>
            <Stars />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
