import { Header, Main, ProfileArea, SuggestedPersonArea } from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <ProfileArea />
        <SuggestedPersonArea />
      </Main>
    </>
  );
};

export default Home;
