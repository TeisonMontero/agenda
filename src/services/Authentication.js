import { post, get, put } from './api'

export const AuthService = {
  signup: async user =>
    await post('register', user),

  updateUser: async (username, updated) =>
    await put(`user/${username}`, updated),
}
