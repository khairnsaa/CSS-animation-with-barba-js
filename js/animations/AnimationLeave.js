import { gsap } from "gsap";

function AnimationLeave(container) {
    return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none' });
}

export default AnimationLeave;
