import { View, Text, Pressable, ImageBackground, TouchableOpacity, FlatList } from 'react-native'

import useFetch from '@/services/usefetch';
import { fecthGenres } from '@/services/api';
import { genresImages } from '@/constants/images';



import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const genre = () => {

    // const {data : movies,loading: movieLoading,error: movieError} = useFetch(() => fecthGenres());
   const genres = [
  { id: 28, name: 'Action', color: 'bg-red-500', gradient: ['#ef4444', '#dc2626'], imagePath: genresImages.action },
  { id: 12, name: 'Adventure', color: 'bg-orange-500', gradient: ['#f97316', '#ea580c'], imagePath: genresImages.adventure },
  { id: 16, name: 'Animation', color: 'bg-yellow-400', gradient: ['#facc15', '#eab308'], imagePath: genresImages.animation },
  { id: 35, name: 'Comedy', color: 'bg-yellow-500', gradient: ['#eab308', '#ca8a04'], imagePath: genresImages.comedy },
  { id: 80, name: 'Crime', color: 'bg-gray-700', gradient: ['#4b5563', '#374151'], imagePath: genresImages.crime },
  { id: 99, name: 'Documentary', color: 'bg-green-600', gradient: ['#16a34a', '#15803d'], imagePath: genresImages.documentary },
  { id: 18, name: 'Drama', color: 'bg-purple-500', gradient: ['#a855f7', '#9333ea'], imagePath: genresImages.drama },
  { id: 10751, name: 'Family', color: 'bg-blue-400', gradient: ['#60a5fa', '#3b82f6'], imagePath: genresImages.family },
  { id: 14, name: 'Fantasy', color: 'bg-indigo-500', gradient: ['#6366f1', '#4f46e5'], imagePath: genresImages.fantasy },
  { id: 27, name: 'Horror', color: 'bg-gray-800', gradient: ['#374151', '#1f2937'], imagePath: genresImages.horror },
  { id: 878, name: 'Science Fiction', color: 'bg-blue-500', gradient: ['#3b82f6', '#2563eb'], imagePath: genresImages.scienceFiction },
  { id: 53, name: 'Thriller', color: 'bg-blue-500', gradient: ['#3b82f6', '#2563eb'], imagePath: genresImages.Thriller },

];


  
  const Card = ({name,id,imagePath}:any) =>{
     return (
      <Link href={`/movies/${id}`} asChild>
     <TouchableOpacity className="w-40 h-60 mx-2 rounded-2xl my-3 overflow-hidden shadow-lg bg-primary">
      <ImageBackground
       source={imagePath }
        resizeMode="cover"
        className="flex-1"
      >
        {/* Gradient Overlay */}
        <View className="absolute inset-0 rounded-2xl" style={{
          backgroundColor: 'transparent',
          // Tailwind doesn't support gradients on View natively; use this fallback or a plugin
        }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'transparent',
              zIndex: 1,
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
              }}
            />
          </View>
        </View>

        {/* Content */}
        <View className="flex-1 justify-end p-5">
          <Text className="text-white text-2xl font-extrabold uppercase tracking-wide"
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.7)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 6,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>

          <View className="w-15 h-[3px] bg-white mt-2 rounded-sm" />
        </View>

        {/* Subtle Border */}
        <View className="absolute inset-0 rounded-2xl" style={{
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.15)',
        }} />
      </ImageBackground>
    </TouchableOpacity>
    </Link>
  );
  }

  return (
     <SafeAreaView className="bg-primary flex-1 px-5">
   <View className='flex-1 bg-primary'>
       <Text className=" text-white text-2xl font-bold mb-3">
                Genres
                </Text>
      <View>
        <FlatList
        data={genres}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card name={item.name} id={item.id} imagePath={item.imagePath} />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        numColumns={2}
        className='mt-5 gap-4 mb-10'
        />
      </View>
    </View>
     </SafeAreaView>
   
  )
}

export default genre