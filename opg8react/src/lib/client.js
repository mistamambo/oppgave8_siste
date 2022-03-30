import sanityClient from '@sanity/client'

const options = {
    projectId: '2zvfxmg9', //process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:  'production',//process.env.REACT_APP_SANITY_DATASET_NAME,
    apiVersion: '2022-03-29',
  }

const client = sanityClient ({
  ...options,
  useCdn: false //process.env.NODE_ENV === 'production',
})

export default client

