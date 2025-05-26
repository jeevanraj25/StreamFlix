import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { UpcomingMovies } from "@/services/api";
import useFetch from "@/services/usefetch";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const router =useRouter();
   
  const {data:upcoming, loading, error} = useFetch(() => UpcomingMovies());


  return (
    <SafeAreaView className="flex-1 bg-primary px-4">
  <View className="flex-1"> 
    <Text className="text-lg text-white font-bold mt-5 mb-3">Upcoming</Text>

    <FlatList
      data={upcoming}
      renderItem={({ item }) => <MovieCard {...item} />}
      keyExtractor={(item) => item?.id?.toString()}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: "flex-start",
        gap: 20,
        paddingRight: 5,
        marginBottom: 10,
      }}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      className="mt-4"
      scrollEnabled={true} 
    />
  </View>
</SafeAreaView>

  );
};

export default Profile;
