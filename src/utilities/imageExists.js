export const imageExists = (url) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    return true;
  } else {
    return false;
  }
};
