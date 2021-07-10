import * as React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@material-ui/core";
import { Image } from "components";
import { useInView } from "scripts";

import KPIMobile from "public/images/about/kpi-mobile.jpg";
import KPIDesktop from "public/images/about/kpi.jpg";

interface DegreeProps {}

export const Degree: React.FC<DegreeProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");
  const { visible, ref } = useInView();

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
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
        src={mobile ? KPIMobile : KPIDesktop}
        alt="Kiev Politechnical Institute"
        width={mobile ? 1041 : 2000}
        height={mobile ? 1331 : 1332}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Aside = styled.div`
  text-align: right;
  margin: 1em;
`;
