export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({query}: {query: string;}): Promise<Movie[]> => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};


export const fetchTvShow = async  ({query}: {query: string;}) : Promise<TVShow[]>  =>{
         
    try {
       const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/discover/tv?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/tv?sort_by=popularity.desc`;

       const response =await fetch(endpoint, {
         method: "GET",
         headers: TMDB_CONFIG.headers,
       });
       
       if(!response.ok){
         throw new Error(`Failed to fetch tv shows: ${response.statusText}`);
       }

       const data = await response.json();
       return data.results;
    } catch (error) {
       console.error("Error fetching tv shows:", error);
       throw error;
    }
}

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};


export const fetchMovieVideo = async ( movieId: string) : Promise<Video[]> =>{
   
   try {
     const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
     );

     if(!response.ok){
       throw new Error(`Failed to fetch movie videos: ${response.statusText}`);
     }
     
     const data = await response.json();
     
     if(data.results.length === 0){
       throw new Error(`No videos found for movie ID: ${movieId}`);
     }
    
     return data.results[0];
   } catch (error) {
      console.error("Error fetching movie videos:", error);
      throw error;
   }
}

export const fecthGenres = async () =>{
   try {
      const response = await fetch(
         `${TMDB_CONFIG.BASE_URL}/genre/movie/list?api_key=${TMDB_CONFIG.API_KEY}`,
         {
            method: "GET",
            headers: TMDB_CONFIG.headers,
         }
      );
      
      if(!response.ok){
         throw new Error(`Failed to fetch genres: ${response.statusText}`);
      }

      const data =response.json();
      return data;
   } catch (error) {
     console.error("Error fetching genres:", error);
     throw error;
   }
}

export const FetchMovieGenre =async (genre: string):Promise<Movie[]> =>{

  try {
    const response =await fetch(
      `${TMDB_CONFIG.BASE_URL}/discover/movie?with_genres=${genre}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );
    
    if(!response.ok){
      throw new Error(`Failed to fetch movie genres: ${response.statusText}`);
    }

     const data = await response.json();
       return data.results;
  } catch (error) {
     console.error("Error fetching movie genres:", error);
     throw error;
  }
}


export const UpcomingMovies =async ():Promise<Movie[]> =>{

  try {
    const response =await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/upcoming?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );
    
    if(!response.ok){
      throw new Error(`Failed to fetch upcoming movies: ${response.statusText}`);
    }

        const data = await response.json();
       return data.results;
  } catch (error) {
     console.error("Error fetching upcoming movies:", error);
     throw error;
  }
}