import { apis } from '~/apis'

export const signIn = (credentials) => {
  return apis.onlineRegistrationApi.post('auth/signIn', {
    json:credentials
  }).json()
}
