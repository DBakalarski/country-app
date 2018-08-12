export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRIES = 'DELETE_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIE';

export function getCountries()  {
	return {
		type: GET_COUNTRIES
	}
}

export function deleteCountry(id)  {
	return {
		type: GET_COUNTRIES,
		id
	}
}

export function getCountry(id)  {
	return {
		type: GET_COUNTRIES,
		id
	}
}

export function searchCountries(searchText)  {
	return {
		type: GET_COUNTRIES,
		searchText
	}
}

export function setContinent(name)  {
	return {
		type: GET_COUNTRIES,
		name
	}
}