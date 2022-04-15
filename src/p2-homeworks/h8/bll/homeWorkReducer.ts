import { UserType } from '../HW8';

export const homeWorkReducer = (state: UserType[], action: ACReturnType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      if (action.payload === 'up') {
        return [...state].sort((a, b) => a.age - b.age);
      }
      return [...state].sort((a, b) => b.age - a.age);
    }
    case 'check': {
      return state.filter((e) => e.age >= action.payload);
    }
    default:
      return state;
  }
};
export const sortUpAC = () => ({ type: 'sort', payload: 'up' } as const);
export const sortDownAC = () => ({ type: 'sort', payload: 'down' } as const);
export const findAdultsAC = () => ({ type: 'check', payload: 18 } as const);
export type ACReturnType =
  | ReturnType<typeof sortUpAC>
  | ReturnType<typeof sortDownAC>
  | ReturnType<typeof findAdultsAC>;
