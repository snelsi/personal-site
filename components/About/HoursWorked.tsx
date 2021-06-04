import * as React from "react";
import styled from "@emotion/styled";
import { useCountUp } from "react-countup";
import Link from "next/link";
import { calculateWorkedHoursSince, useInView } from "scripts";

const Wrapper = styled.div`
  margin-top: 12vw;
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > div.text-block {
    max-width: 100%;
    width: 660px;
    margin: auto;
    text-align: right;

    & .hours {
      font-size: clamp(24px, 10vw, 92px);
      & .hours-number {
        font-size: clamp(24px, 12vw, 100px);
      }
    }
    & p {
      margin-top: 0.5em;
      margin-left: auto;

      & > span {
        white-space: nowrap;
      }
    }
  }
`;

interface HoursWorkedProps {}
export const HoursWorked: React.FC<HoursWorkedProps> = () => {
  const hours = calculateWorkedHoursSince(new Date("August 1 2019"));
  const { visible, ref } = useInView({ rootMargin: "-240px 0px" });
  const { countUp, start, reset } = useCountUp({
    start: 0,
    end: hours,
    duration: Math.min((hours / 1000) * 1.1, 4000),
    startOnMount: false,
  });

  React.useEffect(() => {
    reset();
  }, [hours]);

  React.useEffect(() => {
    if (visible) {
      start();
    }
  }, [visible]);

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
      <div className="text-block">
        <div className="hours montserrat" data-font-weight="700">
          <span className="hours-number">{countUp}</span> Hours
        </div>

        <p data-font-size="XL">
          <span>of coding, designing and creating</span>
          <br />
          <span>
            <Link href="/#projects">real world products</Link>.{" "}
            <span role="img" aria-label="star">
              🌟
            </span>
          </span>
        </p>
      </div>
    </Wrapper>
  );
};
