export const fetchPhotosByQuery = searchQuary => {
  const apiKey = '48501785-b055ddd49a6daf7c18b293e38';

  console.log('Using API Key:', apiKey);

  const searchParams = new URLSearchParams({
    key: apiKey,
    q: searchQuary,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
