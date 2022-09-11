import ky from 'ky-universal'
export const apis = {}
function createApi(options) {
  const { apiBaseURL } = options
  return ky.create({
    prefixUrl: apiBaseURL,
    timeout:30000,
    credentials: 'same-origin',
    hooks: {
      beforeRequest: [
        (req) => {

        }
      ],
      afterResponse: [
        async (req,options,res) => {

        }
      ]
    }
  })
}
export default async function({
  $config
}) {
  if(process.client) {
    apis.onlineRegistrationApi = await createApi({
      apiBaseURL: $config.API_BASE_URL,
    })
  }
}
