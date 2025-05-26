import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import useFetch from "@/services/usefetch";
import { FetchMovieGenre } from "@/services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import TrendingCard from "@/components/TrendingCard";
import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { genreMap } from "@/types/genres";

const movies = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => FetchMovieGenre(id as string));




  return (
    <SafeAreaView className="flex-1 bg-primary px-4">
      <View className="flex-1">
      <Text className="text-lg text-white font-bold mt-5 mb-3">{genreMap[id]}</Text>
   
      <FlatList
        data={movies?.slice(0, 12)}
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
        className="mt-4 "
        scrollEnabled={true}
      />
     </View>
      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
};

export default movies;
