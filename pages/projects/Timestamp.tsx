import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { MinuteOverview, Weeks, Years, YearOverview } from "components/Projects/Timestamp";

const Timestamp: NextPage = () => {
  const myBirthday = new Date("April 22 2000");
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      const currentTime = new Date();
      setNow(currentTime);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <Container>
      <Head>
        <title>Life to live</title>
      </Head>
      <Link href="/">
        <a href="/">На главную</a>
      </Link>
      <Years date={now} />
      <YearOverview date={now} />
      {/* <MinuteOverview date={now} /> */}
      <Weeks birthday={myBirthday} date={now} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 2.5em;
  margin: 1.25em;
`;
export default Timestamp;
