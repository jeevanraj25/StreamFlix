import { View, Text, Pressable, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import useFetch from '@/services/usefetch';
import { fecthGenres } from '@/services/api';

const genre = () => {

    const {data : movies,loading: movieLoading,error: movieError} = useFetch(() => fecthGenres());
      
    const genres = [
    { id: 1, name: 'Action', color: 'bg-red-500', gradient: ['#ef4444', '#dc2626'] },
    { id: 2, name: 'Comedy', color: 'bg-yellow-500', gradient: ['#eab308', '#ca8a04'] },
    { id: 3, name: 'Drama', color: 'bg-purple-500', gradient: ['#a855f7', '#9333ea'] },
    { id: 4, name: 'Horror', color: 'bg-gray-800', gradient: ['#374151', '#1f2937'] },
    { id: 5, name: 'Romance', color: 'bg-pink-500', gradient: ['#ec4899', '#db2777'] },
    { id: 6, name: 'Sci-Fi', color: 'bg-blue-500', gradient: ['#3b82f6', '#2563eb'] },
  ];


  
   

  return (
    <TouchableOpacity       
      style={{
        width: 256,
        height: 320,
        marginHorizontal: 8,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 12,
      }}
    >      
      <ImageBackground       
        source={{ uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop' }}
        style={{ flex: 1 }}
        resizeMode="cover"
      >        
        {/* Better gradient overlay */}
        <View 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
          }}
        />
        
        {/* Content */}
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>          
          <Text 
            style={{
              fontSize: 32,
              fontWeight: '700',
              color: 'white',
              letterSpacing: 1,
              textTransform: 'uppercase',
              textShadowColor: 'rgba(0, 0, 0, 0.7)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 6,
            }}
          >            
            Electronic
          </Text>
          
          {/* Modern accent line */}
          <View 
            style={{
              width: 60,
              height: 3,
              backgroundColor: '#fff',
              marginTop: 8,
              borderRadius: 2,
            }}
          />
        </View>        

        {/* Subtle border */}
        <View           
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.15)',
            borderRadius: 20,
          }}
        />      
      </ImageBackground>    
    </TouchableOpacity>  
  )
}

export default genre