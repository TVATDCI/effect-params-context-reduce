import api from "./api";

const userService = {
  /**
   * Fetch all users
   * @returns {Promise<Array>} Array of user objects
   */
  getAllUsers: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  /**
   * Fetch a single user by ID
   * @param {string|number} id - User ID
   * @returns {Promise<Object>} User object
   */
  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
};

export default userService;
