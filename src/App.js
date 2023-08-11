import React, { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const LazyProjects = React.lazy(() => import("./components/Projects"));
const LazyProducts = React.lazy(() => import("./components/Products"));
const LazyForm = React.lazy(() => import("./components/Form"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyProjects />
          <LazyProducts />
          <LazyForm />
          <LazyFooter />
        </Suspense>
      </main>
    </>
  );
}

export default App;
