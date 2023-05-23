import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import Navigation from "../components/navigation/navigation";
import Home from "../pages/home";
import NoMatch from "./noMatch";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/details/:id" element={<Details />}></Route> */}
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;