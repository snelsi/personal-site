import * as React from "react";

export const useTime = (refreshCycle = 1000): Date => {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), refreshCycle);
    return () => clearInterval(intervalId);
  }, [refreshCycle]);

  return now;
};
