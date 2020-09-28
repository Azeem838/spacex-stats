async function spacexAPI() {
  try {
    const response = await fetch(
      'https://api.spacexdata.com/v4/launches/latest',
      { mode: 'cors' },
    );
    const result = await response.json();
    console.log(result);
    // const src = result.data.images.original.url;
    // return src;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export default spacexAPI;
