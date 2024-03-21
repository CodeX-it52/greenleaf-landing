import React from "react";
import { Route, Routes } from "react-router";
import SEO from "@utils/seo.tsx";
import Layout from "@layout/layout";
import ConfidentialPolitic from "@pages/confidential-politic";
const Home = React.lazy(() => import("@pages/home"));

const App: React.FC = () => {
  return (
      <div className={"body"}>
          <SEO title={"GreenLeaf"} description={""} keywords={[""]}/>
              <Layout>
                  <Routes>
                      <Route path={"/"} element={<Home/>}/>
                      <Route path={"/confidential"} element={<ConfidentialPolitic />}/>
                  </Routes>
              </Layout>
      </div>
  );
}

export default App;
