const initState = { isLoading: false };

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): { isLoading: boolean } => {
  // fix any
  switch (action.type) {
    case 'SET-TRUE': {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};

export const loadingAC = (payload: boolean) =>
  ({
    type: 'SET-TRUE',
    payload,
  } as const); // fix any
