import axios from "axios";

const URL = "https://yts.mx/api/v2/list_movies.json";

const api = {
  async getMovies() {
    const upcomingMovies = await axios.get(URL, {
      params: {
        sort_by: "date_added",
      },
    });

    const popularMovies = await axios.get(URL, {
      params: {
        sort_by: "rating",
      },
    });

    return {
      upcomingMovies: upcomingMovies.data.data,
      popularMovies: popularMovies.data.data,
    };
  },

  async getTv() {
    const upcomingTv = await axios.get(URL, {
      params: {
        sort_by: "date_added",
        genre: "drama",
      },
    });

    const popularTv = await axios.get(URL, {
      params: {
        sort_by: "rating",
        genre: "drama",
      },
    });
    return {
      upcomingTv: upcomingTv.data.data,
      popularTv: popularTv.data.data,
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
