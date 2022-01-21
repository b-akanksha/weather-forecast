export const getWeatherService = async (city) => {
  const url = `${process.env.REACT_APP_API}${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const result = await response.json();
  return result;
};
