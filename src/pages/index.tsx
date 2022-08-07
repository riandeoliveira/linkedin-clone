import AboutArea from "components/AboutArea";
import AcademicEducationsArea from "components/AcademicEducationsArea";
import ActivitiesArea from "components/ActivitiesArea";
import Aside from "components/Aside";
import ExperiencesArea from "components/ExperiencesArea";
import Header from "components/Header";
import HighlightsArea from "components/HighlightsArea";
import Layout from "components/Layout";
import Main from "components/Main";
import ProfileArea from "components/ProfileArea";
import SuggestedConnectionsArea from "components/SuggestedConnectionsArea";
import SuggestedPersonArea from "components/SuggestedPersonArea";
import UserLanguagesArea from "components/UserLanguagesArea";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout>
        <Main>
          <ProfileArea />
          <HighlightsArea />
          <ActivitiesArea />
          <AboutArea />
          <ExperiencesArea />
          <AcademicEducationsArea />
          <UserLanguagesArea />
        </Main>
        <Aside>
          <SuggestedPersonArea />
          <SuggestedConnectionsArea />
        </Aside>
      </Layout>
    </>
  );
};

export default Home;
