import { View, Text, TouchableOpacity } from "react-native";

const InputHeader = () => {
  return (
    <View className="flex-row justify-between items-center mb-3">
      <Text className="text-white text-2xl font-manrope-extrabold">
        Enter Your Prompt
      </Text>
      <TouchableOpacity onPress={() => console.log("surprise me")}>
        <View className="flex-row items-center gap-2">
          <Text className="font-manrope-regular">🎲</Text>
          <Text className="font-manrope-regular text-white">Surprise me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;
