import api from "./api";

const GET_MOVIES = "GET_MOVIES";

const GET_DETAIL = "GET_DETAIL";

const SEARCH = "SEARCH";

export const getMovies = () => async (dispatch) => {
  const datas = await api.getMovies();
  dispatch({
    type: GET_MOVIES,
    datas,
  });
};

export const getDetail = (id) => async (dispatch) => {
  const data = await api.getDetail(id);
  dispatch({
    type: GET_DETAIL,
    data,
  });
};

export const search = (keyword) => async (dispatch) => {
  const data = await api.search(keyword);
  dispatch({
    type: SEARCH,
    data,
  });
};

const initState = {
  movies: {
    isLoaded: false,
    nowPlaying: {
      movies: [],
    },
    upcomingMovies: {
      movies: [],
    },
    popularMovies: {
      movies: [],
    },
  },
  tv: {},

  detail: {
    isLoaded: false,
    data: {},
  },
  search: {
    isLoaded: false,
    data: [],
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      const { nowPlaying, upcomingMovies, popularMovies } = action.datas;
      return {
        ...initState,
        movies: {
          isLoaded: true,
          nowPlaying: {
            movies: nowPlaying.movies,
          },
          upcomingMovies: {
            movies: upcomingMovies.movies,
          },
          popularMovies: {
            movies: popularMovies.movies,
          },
        },
      };

    case GET_DETAIL:
      return {
        ...initState,
        detail: {
          isLoaded: true,
          data: action.data,
        },
      };

    case SEARCH:
      return {
        ...initState,
        search: {
          isLoaded: true,
          data: action.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
