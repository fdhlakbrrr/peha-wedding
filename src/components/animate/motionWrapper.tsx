import { ReactNode, useState } from "react";
import { Target, TargetAndTransition, Transition, motion } from "motion/react";

interface Props {
  children: ReactNode;
  initial: Target | boolean;
  animate: TargetAndTransition;
  transition: Transition;
  afterComplete?: {
    initial: Target | boolean;
    animate: TargetAndTransition;
    transition: Transition;
  };
}

export const MotionWrapper = ({
  children,
  initial,
  animate,
  transition,
  afterComplete,
}: Props) => {
  const [initialValue, setInitialValue] = useState<Target | boolean>(initial);
  const [animateValue, setAnimateValue] =
    useState<TargetAndTransition>(animate);
  const [transitionValue, setTransitionValue] =
    useState<Transition>(transition);

  return (
    <motion.div
      style={{ background: "green", width: "100px", height: "100px" }}
      initial={initialValue}
      animate={animateValue}
      transition={transitionValue}
      onAnimationComplete={
        afterComplete &&
        (() => {
          setInitialValue(afterComplete.initial);
          setAnimateValue(afterComplete.animate);
          setTransitionValue(afterComplete.transition);
        })
      }
    >
      {children}
    </motion.div>
  );
};
