import axios from 'axios'

const baseApi=axios.create({
    baseURL:process.env.APP_BASE_API || 'http://localhost:5001/'
})

export const BaseService={baseApi}