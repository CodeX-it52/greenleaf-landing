import React from "react";
import { Route, Routes } from "react-router";
import SEO from "@utils/seo.tsx";
import Layout from "@layout/layout";
import ConfidentialPolitic from "@pages/confidential-politic";
const Home = React.lazy(() => import("@pages/home"));

const SEOOptions: {title: string, description: string, keywords: string[]} = {
    title: "GreenLeaf",
    description: "GreenLeaf автоматизирует процесс выращивания растений в гидропонных системах и предоставляет надежные и понятные инструменты управления",
    keywords: ["теплица", "гидропонная система", "растения", "выращивание"],
}
const App: React.FC = () => {
  return (
      <div className={"body"}>
          <SEO
              title={SEOOptions.title}
              description={SEOOptions.description}
              keywords={SEOOptions.keywords}
          />
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
