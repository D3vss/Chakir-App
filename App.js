import React from "react";

//Screens
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RechercheManuelleScreen from "./app/screens/RechercheManuelleScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import { Button } from "react-native";

const DATA = [
  {
    id: 1,
    label: "item1",
  },
  {
    id: 2,
    label: "item2",
  },
  {
    id: 3,
    label: "item3",
  },
];

export default function App() {
  return <HomeScreen />;
}
