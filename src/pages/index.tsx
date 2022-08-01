import {
  Aside,
  Header,
  Layout,
  Main,
  ProfileArea,
  SuggestedPersonArea,
} from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Layout>
        <Main>
          <ProfileArea />
        </Main>
        <Aside>
          <SuggestedPersonArea />
        </Aside>
      </Layout>
    </>
  );
};

export default Home;
