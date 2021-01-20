import api from "./api";

const GET_MOVIES = "GET_MOVIES";

const GET_TV_SHOW = "GET_TV_SHOW";

const GET_DETAIL = "GET_DETAIL";

const SEARCH = "SEARCH";

export const getMovies = () => async (dispatch) => {
  const datas = await api.getMovies();
  dispatch({
    type: GET_MOVIES,
    datas,
  });
};
export const getTv = () => async (dispatch) => {
  const datas = await api.getTv();
  dispatch({
    type: GET_TV_SHOW,
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
      data: null,
    },
    upcomingMovies: {
      data: null,
    },
    popularMovies: {
      data: null,
    },
  },
  tv: {
    isLoaded: false,
    nowPlaying: {
      data: null,
    },
    upcomingTv: {
      data: null,
    },
    popularTv: {
      data: null,
    },
  },

  detail: {
    isLoaded: false,
    data: {},
  },
  search: {
    isLoaded: false,
    data: null,
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      const { upcomingMovies, popularMovies } = action.datas;
      return {
        ...state,
        movies: {
          isLoaded: true,
          upcomingMovies: {
            data: upcomingMovies.movies,
          },
          popularMovies: {
            data: popularMovies.movies,
          },
        },
      };
    case GET_TV_SHOW:
      const { popularTv, upcomingTv } = action.datas;
      return {
        ...state,
        tv: {
          isLoaded: true,
          upcomingTv: {
            data: upcomingTv.movies,
          },
          popularTv: {
            data: popularTv.movies,
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
