import { Header, Main, ProfileArea } from "components";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <ProfileArea />
      </Main>
    </>
  );
};

export default Home;
