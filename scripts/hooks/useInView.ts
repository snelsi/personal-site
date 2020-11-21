import React from "react";
import { useInView as RIUseInView, IntersectionObserverProps } from "react-intersection-observer";

export interface useInViewProps extends IntersectionObserverProps {
  initialValue?: boolean;
}
export const useInView = ({
  initialValue = false,
  rootMargin = "-200px 0px",
  triggerOnce = true,
  ...props
} = {}) => {
  const [visible, setVisible] = React.useState<boolean>(initialValue);
  const { ref, inView, ...hookProps } = RIUseInView({
    rootMargin,
    triggerOnce,
    ...props,
  });

  React.useEffect(() => {
    if (!visible && inView) {
      setVisible(true);
    }
  }, [visible, inView]);

  return { visible, ref, inView, ...hookProps };
};
