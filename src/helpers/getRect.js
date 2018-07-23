export default element => {
  const rect = element.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const height = rect.height;
  const bottom = top + height;
  return {
    height,
    top,
    bottom
  };
};
