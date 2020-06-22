import * as React from "react";

export const useCheerExplorers = () => {
  React.useEffect(() => console.log(process.env.MESSAGE_TO_HACKERS), []);
};
