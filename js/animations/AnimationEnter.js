import { gsap } from "gsap";
function AnimationEnter(container) {
    return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none' });
}

export default AnimationEnter