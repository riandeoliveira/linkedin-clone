import type { NextPage } from "next";
import About from "templates/About";
import Activities from "templates/Activities";
import Aside from "templates/Aside";
import Educations from "templates/Educations";
import Experiences from "templates/Experiences";
import Header from "templates/Header";
import Highlights from "templates/Highlights";
import Languages from "templates/Languages";
import Layout from "templates/Layout";
import Main from "templates/Main";
import Profile from "templates/Profile";
import SuggestedConnections from "templates/SuggestedConnections";
import SuggestedPeople from "templates/SuggestedPeople";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout>
        <Main>
          <Profile />
          <Highlights />
          <Activities />
          <About />
          <Experiences />
          <Educations />
          <Languages />
        </Main>
        <Aside>
          <SuggestedPeople />
          <SuggestedConnections />
        </Aside>
      </Layout>
    </>
  );
};

export default Home;
