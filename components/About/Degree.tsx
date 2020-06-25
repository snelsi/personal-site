import * as React from "react";
import { useMediaQuery } from "@material-ui/core";

import { Image } from "components";
import styled from "styled-components";

interface DegreeProps {}

export const Degree: React.FC<DegreeProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");

  return (
    <div className="block">
      <div className="text-block" data-right>
        <p>
          In 2017 I entered the{" "}
          <a href="https://kpi.ua/en" target="_blank" rel="noopener noreferrer">
            Kyiv National Polytechnic Institute of Igor Sikorsky
          </a>
          . Now I am a fourth-year student of the Department of Automation of Power Processes and
          Systems Engineering on ’Computer Sciences’ specialty.
        </p>
      </div>
      <Image
        src={mobile ? "about/kpi-mobile.jpg" : "about/kpi.jpg"}
        alt="Kiev Politechnical Institute"
        ratio={mobile ? 150 : 66}
      />
      <Aside>
        © Image by{" "}
        <a href="https://olegstelmakh.com/" target="_blank" rel="noopener noreferrer">
          Oleg Stelmakh
        </a>{" "}
        and{" "}
        <a href="http://skyandmethod.com/" target="_blank" rel="noopener noreferrer">
          skyandmethod.com
        </a>
      </Aside>
    </div>
  );
};

const Aside = styled.div`
  text-align: right;
  margin: 1em;
`;
