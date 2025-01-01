import * as m from "motion/react-m";
import {
  HTMLMotionProps,
  LazyMotion,
  MotionStyle,
  Target,
  TargetAndTransition,
  Transition,
  // motion,
} from "motion/react";
import { ReactNode, useState } from "react";

const loadFeatures = import("@/lib/motion").then((res) => res.default);

interface Props {
  children: ReactNode;
  initial?: Target | boolean;
  animate?: TargetAndTransition;
  transition?: Transition;
  style?: MotionStyle;
  afterComplete?: {
    initial?: Target | boolean;
    animate: TargetAndTransition;
    transition?: Transition;
  };
  motionProps?: HTMLMotionProps<"div">;
}

export const MotionWrapper = ({
  children,
  initial,
  animate,
  transition,
  style,
  afterComplete,
  motionProps,
}: Props) => {
  const [initialValue, setInitialValue] = useState<
    Target | boolean | undefined
  >(initial);
  const [animateValue, setAnimateValue] = useState<TargetAndTransition>(
    animate as TargetAndTransition
  );
  const [transitionValue, setTransitionValue] = useState<
    Transition | undefined
  >(transition);

  return (
    <LazyMotion features={async () => await loadFeatures}>
      <m.div
        style={{ ...(style as object) }}
        initial={initialValue}
        animate={animateValue}
        transition={transitionValue}
        onAnimationComplete={
          afterComplete &&
          (() => {
            afterComplete.initial && setInitialValue(afterComplete.initial);
            afterComplete.transition &&
              setTransitionValue(afterComplete.transition);
            setAnimateValue(afterComplete.animate);
          })
        }
        {...motionProps}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
