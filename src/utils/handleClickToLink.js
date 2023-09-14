import { gsap } from "gsap";

export const handleClickToLink = (
  e,
  target,
  duration,
  isMenuLink = false,
  setIsOpen
) => {
  e.preventDefault();
  const linkTo = target.current.getAttribute("href");
  gsap.to(window, { duration: duration, scrollTo: { y: linkTo } });
  if (isMenuLink) {
    setIsOpen(false);
  }
};
