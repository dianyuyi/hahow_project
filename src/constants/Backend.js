const url = `https://hahow-recruit.herokuapp.com/heroes`

export const api = {
  list: {
    get: `${url}`,
  },
  hero:{
    getById: (id) => `${url}${id}`,
    getProfile: (id) => `${url}/${id}/profile`,
    updateProfile: (id) => `${url}/${id}/profile`,
  }
} 