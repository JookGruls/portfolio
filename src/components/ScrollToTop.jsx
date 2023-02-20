export const scrollToTop = (targetId = 'container', position = 0) => {
   document.getElementById(targetId).scrollTo({ top: position, left: 0, behavior: 'smooth' });
   return null;
};
