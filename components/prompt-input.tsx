import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
interface PromptInputProps {
  prompt: string;
  onPromptChange: (text: string) => void;
  onSurpriseMe: () => void;
}

export default function PromptInput({
  prompt,
  onPromptChange,
  onSurpriseMe,
}: PromptInputProps) {
  const maxLength = 500;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-6 mt-3">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-white text-2xl font-manrope-extrabold">
          Enter Your Prompt
        </Text>
        <TouchableOpacity onPress={onSurpriseMe}>
          <View className="flex-row items-center gap-2">
            <Text className="font-manrope-regular">🎲</Text>
            <Text className="font-manrope-regular text-white">Surprise me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#27272A", "#943DFF", "#2938DC"]}
        start={{ x: 0, y: 2 }}
        end={{ x: 20, y: 10 }}
        style={{
          borderRadius: 16,
          padding: 12,
          borderWidth: isFocused ? 1 : 0,
          borderColor: isFocused ? "white" : "transparent",
        }}
        children={
          <>
            <TextInput
              className="text-white h-44 text-base font-manrope-regular"
              placeholder="A blue lion logo reading 'HEXA' in bold letters"
              placeholderTextColor="#A0A0A0"
              multiline
              value={prompt}
              onChangeText={onPromptChange}
              maxLength={maxLength}
              textAlignVertical="top"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              enterKeyHint="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              submitBehavior="submit"
            />
            <View className="flex-row justify-between items-center">
              <Text className="text-[#71717A] text-left mt-1 font-manrope-regular text-xs">
                {prompt.length}/{maxLength}
              </Text>
              <Pressable onPress={() => onPromptChange("")}>
                <AntDesign name="close" size={18} color="white" />
              </Pressable>
            </View>
          </>
        }
      />
    </View>
  );
}
