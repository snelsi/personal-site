import * as React from "react";
import { NextPage } from "next";

import { Catalog } from "components";

const Projects: NextPage = () => {
  React.useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <>
      <div>Мои проекты</div>
      <Catalog />
    </>
  );
};

export default Projects;
