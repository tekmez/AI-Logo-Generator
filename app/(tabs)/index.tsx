import { Button, View } from "react-native";
import { useLogoService } from "@/hooks/useLogoService";

export default function Home() {
  const {
    addLogo,
    getLogo,
    updateLogo,
    deleteLogo,
    getAllLogos,
    generateLogo,
  } = useLogoService();

  const handleAddLogo = async () => {
    const logoUrl = await generateLogo(
      "Opulence Designs için zarafet ve sadeliğe odaklanan lüks bir logo, gaming stilinde yarat"
    );
    if (!logoUrl) {
      console.error("Logo generation failed");
      return;
    }
    await addLogo({
      logoUrl: logoUrl,
      prompt:
        "Opulence Designs için zarafet ve sadeliğe odaklanan lüks bir logo, gaming stilinde yarat",
      style: "gaming",
      createdAt: new Date(),
    });
  };

  const handleGetLogo = async () => {
    const logo = await getLogo("1");
    console.log(logo);
  };

  const handleUpdateLogo = async () => {
    await updateLogo("1", {
      logoUrl: "www.updated-example.com",
      prompt: "create a logo for a company that makes AI tools",
      style: "Modern",
      createdAt: new Date(),
    });
  };

  const handleDeleteLogo = async () => {
    await deleteLogo("1");
  };

  const handleGetAllLogos = async () => {
    const logos = await getAllLogos();
    console.log(logos);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Button title="Add Logo" onPress={handleAddLogo} />
      <Button title="Get Logo" onPress={handleGetLogo} />
      <Button title="Update Logo" onPress={handleUpdateLogo} />
      <Button title="Delete Logo" onPress={handleDeleteLogo} />
      <Button title="Get All Logos" onPress={handleGetAllLogos} />
    </View>
  );
}
