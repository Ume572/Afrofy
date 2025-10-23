
export const mobile_siteConfig = Object.freeze({
  SHOW_INTRO: 'show_intro',
  IS_LOGIN: 'is_login',
  MOB_ACCESS_TOKEN_KEY: 'token',
  BASE_URL: 'http://103.119.171.213:3001/api/',
      // BASE_URL: 'https://8rhc56ph-3001.inc1.devtunnels.ms/api/',
      // IMAGE_BASE_URL: 'https://8rhc56ph-3001.inc1.devtunnels.ms',
  IMAGE_BASE_URL: 'http://103.119.171.213:3001',
  
  USER_Data:"user_data",
  
  // Image_URL:"http://103.189.173.127:3000",
  // SignUp / Login / Forgot Password
  
  // Login Api
  USER_OTP_REQUEST: 'auth/user/otp/request',
  USER_OTP_VERIFY: 'auth/user/otp/verify',

  
  //selection-Artist-api
     GET_ARTISTS: 'user/artists',


      // ✅ ADD MOOD SONGS API
  GET_MOOD_SONGS: 'user/mood', // /user/mood/{id}/songs


       // ✅ ADD ARTIST PROFILE API HERE
  GET_ARTIST_PROFILE: 'user/artist', // /user/artist/{id}

  // User-Profile

  GET_PROFILE: 'user/profile',   // GET user profile
  UPDATE_PROFILE: 'user/profile', // PUT update profile
  

//Home Api

   HOME_DATA: 'user/home',


   // Song Api

    SONG_INFO: 'user/song', // /user/song/{id}/info
  STREAM_SONG: 'user/song', // /user/song/{id}


// Search api have used in mobile-site sorry for that 
  
 // Search API
  SEARCH_DATA: 'user/search',



    // ✅ Favorite Artists APIs
  GET_FAVORITE_ARTISTS: 'user/favorite-artists', // GET favorite artists
  ADD_FAVORITE_ARTIST: 'user/favorite-artists', // POST add favorite artist
  REMOVE_FAVORITE_ARTIST: 'user/favorite-artists', // DELETE remove favorite artist


  
  // ✅ ADD PLAYLIST APIS HERE
  CREATE_PLAYLIST: 'user/playlist', // POST create playlist
  GET_USER_PLAYLISTS: 'user/playlist', // GET all user playlists
  GET_PLAYLIST_BY_ID: 'user/playlist', // GET /user/playlist/{id}
  ADD_SONG_TO_PLAYLIST: 'user/playlist/add-song', // POST add song to playlist
  DELETE_PLAYLIST: 'user/playlist', // DELETE playlist
   REMOVE_SONG_FROM_PLAYLIST: 'user/playlist/remove-song',



    LIKE_SONG: 'user/song', // POST /user/song/{id}/like
  UNLIKE_SONG: 'user/song', // DELETE /user/song/{id}/like
  CHECK_SONG_LIKE_STATUS: 'user/song', // GET /user/song/{id}/like-status
  GET_LIKED_SONGS: 'user/liked-songs', // GET /user/liked-songs


   // ✅ ADD VIDEO APIS HERE
  GET_VIDEOS: 'user/videos', // GET all videos
  GET_VIDEO_BY_ID: 'user/video', // GET /user/video/{id}
  TOGGLE_VIDEO_LIKE: 'user/video', // POST /user/video/{videoId}/toggle-like



   // ✅ ADD FOLLOW/UNFOLLOW ARTIST APIS
  FOLLOW_ARTIST: 'user/favorite-artists', // POST follow artist
  UNFOLLOW_ARTIST: 'user/favorite-artists', // DELETE unfollow artist
  

});