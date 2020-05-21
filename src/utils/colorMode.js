export const colorMode = (isDarkMode) => {
  const textColor = isDarkMode ? "#ffffff" : "#121212";
  const primaryColor = isDarkMode ? "#121212" : "#ffffff";
  const theme = {
    textColor,
    primaryColor,
  };
  return theme;
};
