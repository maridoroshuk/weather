const getBackgroundImage = (icon: string | null) => {
  if (icon) {
    return `url(${require(`../assets/background/${icon.replace(
      'n',
      'd',
    )}.jpg`)})`;
  }
  return '';
};

export default getBackgroundImage;
