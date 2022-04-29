import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '1smdy25l',
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skZQampOSKmQ5k9Gn1EdSdE1Vtb7P7KZ8uHqgFaoJ4wedB0rYoNGCacv2K6hzURa7TvphobSYEJDfit4PAX6TglpfzTrmOFJzGp4yEilKnI9zB7vWH42r39Xb773iXetXSsSVM8Qt15f1D0gWh7Dw5ZhdWPy07vKH5P4XedVaa9mzTNh17fv',
    // token: porcess.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)