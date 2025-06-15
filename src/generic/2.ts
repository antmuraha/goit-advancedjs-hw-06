/*
  You have the AllType type. There is a function compare that takes two objects. These objects contain the fields of AllType.
  Your task is to use Pick and generics to specify that the fields of these objects belong to AllType.
  The compare function should return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position'| 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};