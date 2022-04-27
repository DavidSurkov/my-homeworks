const initState = {
  colour: 'white',
};
export type InitType = typeof initState;
export const themeReducer = (state: InitType = initState, action: ReturnType<typeof changeThemeAC>): InitType => {
  // fix any
  switch (action.type) {
    case 'CHANE-COLOUR-THEME': {
      return {
        ...state,
        colour: action.colour,
      };
    }
    default:
      return state;
  }
};

export const changeThemeAC = (colour: string) => ({ type: 'CHANE-COLOUR-THEME', colour } as const); // fix any
