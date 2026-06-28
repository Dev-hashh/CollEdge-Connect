const API = axios.create({ baseURL });

// Centralize error messages so every component gets a clean, readable
// string instead of having to dig into err.response.data itself.
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  }
);

export const getTasks = () => API.get("/").then((res) => res.data);

export const createTask = (task) => API.post("/", task).then((res) => res.data);

export const updateTask = (id, task) =>
  API.put(`/${id}`, task).then((res) => res.data);

export const deleteTask = (id) => API.delete(`/${id}`).then((res) => res.data);

export default API;