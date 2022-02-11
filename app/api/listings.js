import apiClient from "./client.js"

const getListings = () => {
  return apiClient.get('/listings')
}

const addListings = async (listing) => {
  const data = new FormData();
  data.append('title', listing.title)
  data.append('price', listing.price)
  data.append('description', listing.description)
  data.append('categoryId', listing.category)


  const response = await apiClient.post('/listings', data, {
    onUploadProgress: (progress) => console.log(progress)
  });
}

export default {
  getListings,
  addListings
}