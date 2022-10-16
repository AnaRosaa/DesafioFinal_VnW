import React from "react";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Router from "./Routes/Route";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}