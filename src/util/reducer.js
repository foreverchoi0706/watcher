import api from "./api";

const GET_MOVIES = "GET_MOVIES";

const GET_TV_SHOW = "GET_TV_SHOW";

const GET_DETAIL = "GET_DETAIL";

const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";

const SEARCH = "SEARCH";

const SEARCH_SUCCESS = "SEARCH_SUCCESS";

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
  dispatch({
    type: GET_DETAIL,
  });
  const data = await api.getDetail(id);
  dispatch({
    type: GET_DETAIL_SUCCESS,
    data,
  });
};

export const search = (keyword) => async (dispatch) => {
  dispatch({
    type: SEARCH,
  });
  const data = await api.search(keyword);
  dispatch({
    type: SEARCH_SUCCESS,
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
        ...state,
        detail: {
          isLoaded: false,
          data: null,
        },
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          isLoaded: true,
          data: action.data,
        },
      };

    case SEARCH:
      return {
        ...state,
        search: {
          isLoaded: false,
          data: null,
        },
      };
    case SEARCH_SUCCESS:
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
