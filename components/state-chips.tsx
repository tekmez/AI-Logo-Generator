import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Loading from "./loading";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// State chip types
type ChipState = "loading" | "success" | "error";

interface StateChipProps {
  state: ChipState;
  imageUrl?: string;
  onPress?: () => void;
}

interface TextContentProps {
  title: string;
  subtitle: string;
  classNameSubtitle?: string;
}

const TextContent = ({
  title,
  subtitle,
  classNameSubtitle,
}: TextContentProps) => {
  return (
    <View className="ml-3 flex-1">
      <Text className="text-white font-manrope-extrabold text-base">
        {title}
      </Text>
      <Text
        className={`text-white text-sm mt-0.5 font-manrope-regular ${classNameSubtitle}`}
      >
        {subtitle}
      </Text>
    </View>
  );
};

// Loading state chip
const LoadingChip = () => (
  <LinearGradient
    colors={["#27272A", "#943DFF", "#2938DC"]}
    start={{ x: 0, y: 2 }}
    end={{ x: 20, y: 10 }}
    style={{
      borderRadius: 16,
      marginBottom: 12,
    }}
  >
    <View className="flex-row items-center py-3 rounded-2xl h-[70px]">
      <View className="justify-center items-center bg-[#18181B] w-[70px] h-[70px]">
        <Loading />
      </View>
      <TextContent
        title="Creating Your Design..."
        subtitle="Ready in 2 minutes"
        classNameSubtitle="text-gray-400"
      />
    </View>
  </LinearGradient>
);

// Success state chip
interface SuccessChipProps {
  imageUrl?: string;
  onPress?: () => void;
}

const SuccessChip = ({ imageUrl, onPress }: SuccessChipProps) => (
  <LinearGradient
    colors={["#2938DC", "#943DFF"]}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
    style={{
      borderRadius: 16,
      marginBottom: 12,
    }}
  >
    <TouchableOpacity
      className="flex-row items-center py-3 rounded-2xl h-[70px]"
      onPress={onPress}
    >
      {imageUrl ? (
        <Image source={imageUrl} contentFit="cover" style={styles.chipImage} />
      ) : (
        <View className="w-[70px] h-[70px] rounded-tl-2xl rounded-bl-2xl bg-white/20" />
      )}
      <TextContent title="Your Design is Ready!" subtitle="Tap to see it." />
    </TouchableOpacity>
  </LinearGradient>
);

// Error state chip
interface ErrorChipProps {
  onPress?: () => void;
}

const ErrorChip = ({ onPress }: ErrorChipProps) => (
  <TouchableOpacity
    className="flex-row items-center py-3 rounded-2xl h-[70px] bg-[#EF4444] mb-3"
    onPress={onPress}
    disabled={!onPress}
  >
    <View className="w-[70px] h-[70px] rounded-tl-2xl rounded-bl-2xl bg-[#F58E8E] justify-center items-center">
      <MaterialIcons name="error" size={32} color="white" />
    </View>
    <TextContent
      title="Oops, something went wrong!"
      subtitle="Click to try again."
    />
  </TouchableOpacity>
);

// Main state chip
export default function StateChip({
  state,
  imageUrl,
  onPress,
}: StateChipProps) {
  // Render the correct component based on the state
  switch (state) {
    case "loading":
      return <LoadingChip />;
    case "success":
      return <SuccessChip imageUrl={imageUrl} onPress={onPress} />;
    case "error":
      return <ErrorChip onPress={onPress} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  chipImage: {
    width: 70,
    height: 70,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
});
