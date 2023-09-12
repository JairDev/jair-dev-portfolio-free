import { gsap } from "gsap";

export const handleClickToLink = (e, target, duration) => {
  e.preventDefault();
  const linkTo = target.current.getAttribute("href");
  gsap.to(window, { duration: duration, scrollTo: { y: linkTo } });
};
