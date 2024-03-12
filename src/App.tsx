import React from "react";
import { Route, Routes } from "react-router";
import SEO from "@utils/seo.tsx";
import Layout from "@layout/layout";
const Home = React.lazy(() => import("@pages/home"));

const App: React.FC = () => {
  return (
    <div className={"body"}>
      <SEO title={"GreenLeaf"} description={""} keywords={[""]} />
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
