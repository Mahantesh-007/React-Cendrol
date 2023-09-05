import axios from 'axios';

export async function fetchCategoriesData() {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/categories");
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch categories:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function fetchRandomJoke(category) {
  try {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch joke:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
}

export async function displayRandomNextJoke(currentCategory) {
  try {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${currentCategory}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch next joke:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching next joke:", error);
    return null;
  }
}
