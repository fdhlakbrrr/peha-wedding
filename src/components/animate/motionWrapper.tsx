import {
  MotionStyle,
  Target,
  TargetAndTransition,
  Transition,
  motion,
} from "motion/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  initial?: Target | boolean;
  animate: TargetAndTransition;
  transition?: Transition;
  style?: MotionStyle;
  afterComplete?: {
    initial?: Target | boolean;
    animate: TargetAndTransition;
    transition?: Transition;
  };
}

export const MotionWrapper = ({
  children,
  initial,
  animate,
  transition,
  style,
  afterComplete,
}: Props) => {
  const [initialValue, setInitialValue] = useState<Target | boolean | undefined>(initial);
  const [animateValue, setAnimateValue] =
    useState<TargetAndTransition>(animate);
  const [transitionValue, setTransitionValue] =
    useState<Transition | undefined>(transition);

  return (
    <motion.div
      style={{ ...style }}
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
    >
      {children}
    </motion.div>
  );
};
