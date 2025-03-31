import axios from 'axios'

const axiosOptions = {
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
}

export const axiosClassic = axios.create(axiosOptions)
