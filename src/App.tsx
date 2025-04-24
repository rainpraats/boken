import './App.css';
import { router } from './Router';
import { RouterProvider } from 'react-router';

let string: string;
let number: number;
let boolean: boolean;
let arrayOfStrings: string[];
let tuple: [string, number];
let union: string | number;

type ObjectType = {
  name: string;
  optionalAge?: number;
};

let person: ObjectType = {
  name: 'Bob',
};

import React from 'react';

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
