import axios from "axios";
import { search } from "./reducer";

const api = {
  async getMovies() {
    const nowPlaying = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json",
      {
        params: {
          sort_by: "rating",
        },
      }
    );

    // const upcomingMovies = await axios.get(
    //   "https://yts-proxy.nomadcoders1.now.sh/list_upcoming.json",
    //   {
    //     params: {
    //       sort_by: "rating",
    //     },
    //   }
    // );

    // const popularMovies = await axios.get(
    //   "https://yts-proxy.nomadcoders1.now.sh/list_movies.json",
    //   {
    //     params: {
    //       sort_by: "rating",
    //     },
    //   }
    // );

    // return {
    //   nowPlaying: dnowPlaying.data.data,
    //   upcomingMovies: upcomingMovies.data.data,
    //   popularMovies: popularMovies.data.data,
    // };
    return {
      nowPlaying: nowPlaying.data.data,
      upcomingMovies: nowPlaying.data.data,
      popularMovies: nowPlaying.data.data,
    };
  },
  async getDetail(id) {
    const {
      data: { data },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/movie_details.json",
      {
        params: {
          movie_id: id,
        },
      }
    );
    return data;
  },

  async search(keyword) {
    const {
      data: { data },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json",
      {
        params: {
          query_term: keyword,
          limit: 50,
        },
      }
    );
    return data;
  },
};

export default api;
