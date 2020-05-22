export const colorMode = (isDarkMode) => {
  const textColor = isDarkMode ? "#ffffff" : "#121212";
  const primaryColor = isDarkMode ? "#121212" : "#ffffff";
  const secondaryColor = isDarkMode ? "#1E1E1E" : "#F2F2F2";
  const theme = {
    textColor,
    primaryColor,
    secondaryColor,
  };
  return theme;
};
