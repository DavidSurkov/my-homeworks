import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'; // need to fix any
export type AffairType = { _id: number; name: string; priority: string }; // need to fix any
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  // need to fix any
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  // need to fix any

  switch (filter) {
    case 'all':
      return affairs;
    case 'high':
      return affairs.filter((affairs) => affairs.priority === filter);
    case 'middle':
      return affairs.filter((affairs) => affairs.priority === filter);
    case 'low':
      return affairs.filter((affairs) => affairs.priority === filter);
    default:
      return affairs;
  }
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  // need to fix any
  return affairs.filter((affairs) => affairs._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
  const [filter, setFilter] = useState<FilterType>('all');
  /*const [filteredAffairs, setFilteredAffairs] = useState<AffairType[]>(defaultAffairs);
  useEffect(() => {
    setFilteredAffairs(filterAffairs(affairs, filter));
  }, [filter, affairs]);*/
  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

  return (
    <div>
      <hr />
      <h2>homework 2</h2>
      {/*should work (должно работать)*/}
      <Affairs data={filteredAffairs} setFilter={setFilter} deleteAffairCallback={deleteAffairCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
