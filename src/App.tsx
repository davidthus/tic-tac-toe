import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";

const CPU = lazy(() => import("./pages/CPU"));
const Player = lazy(() => import("./pages/Player"));

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Fallback = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(168, 191, 201);
  font-size: 30px;
  font-weight: 700;
  font-family: inherit;
  padding: 17px 15px 25px;
  -webkit-letter-spacing: 1.25px;
  -moz-letter-spacing: 1.25px;
  -ms-letter-spacing: 1.25px;
  letter-spacing: 1.25px;
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<Fallback>Loading...</Fallback>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpu" element={<CPU />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
