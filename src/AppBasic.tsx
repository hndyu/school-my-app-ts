import React, { useState } from 'react';
import './App.css';

function App() {
  // let str: string;
  // str = "aaa";

  // let num: number;
  // num = 10;

  // let bool: boolean;
  // bool = true;

  // const arr1: Array<number> = [0, 1, 2];
  // let arr2: number[] = [0, 1, 2];

  // arr1.push(10);
  // arr2.push(10);
  // arr1.push("10");
  // arr2 = 10;

  // let null1: null = null;
  // let undefined1 = undefined;

  // let any1: any;
  // any1 = "test";

  // console.log(str, num, bool, arr1, arr2, null1, undefined1, any1);

  // const funcA = (num: number): number => {
  //   console.log(num);
  //   return num;
  // }
  // funcA(10);

  // type TypeA = {
  //   str: string;
  //   num: number;
  // }
  // type TypeB = {
  //   str: string;
  //   bool: boolean;
  // }
  // type TypeC = TypeA & TypeB;

  // const obj: { str: string, num: number } = {
  // const obj: { str: string } & { num: number } = {
  // const obj: TypeC = {
  //   str: "A",
  //   num: 10,
  //   bool: false,
  // };
  // console.log(obj);

  // let val1: string | number = "";
  // val1 = "a";
  // val1 = 10;
  // val1  = [];

  type CustomType<T> = {
    val: T;
  }
  const strObj: CustomType<string> = {
    val: "A",
  };

  const [str, setStr] = useState<string>("a");
  console.log(str);

  return (
    <div className="App">

    </div>
  );
}

export default App;
