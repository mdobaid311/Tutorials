// Typescript generics
const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};
const v1 = makeArr(22, "obaid");
const v2 = makeArr<string, number>("obaid", 22);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v3 = makeFullName({ firstName: "mohammed", lastName: "obaid", age: 22 });

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

const numbertab: NumberTab = {
  id: "tab1",
  position: 3,
  data: 22,
};
const stringTab: StringTab = {
  id: "tab1",
  position: 3,
  data: "mohammed obaid",
};

 