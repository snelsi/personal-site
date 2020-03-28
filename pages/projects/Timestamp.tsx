import * as React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Link from "next/link";
import { MinuteOverview, Weeks, Years, YearOverview } from "components/Timestamp";

const Timestamp: NextPage = () => {
  React.useEffect(() => {
    document.title = "Life to live";
  }, []);

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
