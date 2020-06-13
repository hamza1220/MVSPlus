import axios from 'axios';

const tmdb = "https://api.themoviedb.org/3"
const api_key = process.env.REACT_APP_API_KEY

axios.defaults.baseURL = tmdb
axios.defaults.params = {}
axios.defaults.params['api_key'] = api_key

export const getNowPlaying = async(page) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/now_playing`,
		params: {
			api_key: api_key,
			language: 'en_US',
			// region: 'US',
			page: page
		}
	});
	return req.data;
}

export const getTopRated = async(page) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/top_rated`,
		params: {
			api_key: api_key,
			language: 'en_US',
			region: 'US',
			page: page,
		}
	});
	return req.data;
}

export const getPopular = async(page) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/popular`,
		params: {
			api_key: api_key,
			language: 'en_US',
			// region: 'US',
			page: page,
		}
	});
	return req.data;
}

export const getUpcoming = async(page) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/upcoming`,
		params: {
			api_key: api_key,
			language: 'en_US',
			// region: '',
			page: page,
		}
	});
	return req.data;
}

export const getMovie = async(id) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/${id}`,
		params: {
			api_key: api_key,
			language: 'en_US',
		}
	});
	return req.data;
}

export const getMovieCredits = async(id) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/${id}/credits`,
		params: {
			api_key: api_key,
		}
	});
	return req.data;
}

export const getGenres = async() => {
	const req = await axios({
		method: 'GET',
		url: `/genre/movie/list`,
		params: {
			api_key: api_key,
			language: 'en_US',
		}
	});
	return req.data;
}

export const getSimilar = async(id) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/${id}/similar`,
		params: {
			api_key: api_key,
			language: 'en_US',
			page: 1
		}
	});
	return req.data;
}

export const getReviews = async(id) => {
	const req = await axios({
		method: 'GET',
		url: `/movie/${id}/reviews`,
		params: {
			api_key: api_key,
			language: 'en_US',
			page: 1
		}
	});
	return req.data;
}

export const search = async(type, query) => {
	const req = await axios({
		method: 'GET',
		url: `/search/movie`,
		params: {
			api_key: api_key,
			language: 'en_US',
			query: query,
			page: 1
		}
	});
	return req.data;
}