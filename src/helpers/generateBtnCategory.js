async function requestGenerateCategory(fetchApi, setState, maxLength) {
  const response = await fetchApi();

  if (response) {
    if (response.length > maxLength) {
      response.length = maxLength;
    }
    setState(response);
  } else {
    setState([]);
  }
}

export default requestGenerateCategory;
