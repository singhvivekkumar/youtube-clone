const useFetchData= async (api) => {
  const response = await fetch(api);
  const jsonData = await response.json();
  return jsonData;
}

export default useFetchData;
