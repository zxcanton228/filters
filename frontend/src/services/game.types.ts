import type { EnumPlatform } from './../types/game.interface'

export const GAMES = 'games'

export type TypeGameDataFilters = {
	sort?: EnumGameSort
	searchTerm?: string
	genres?: string
	platform?: EnumPlatform
	rating?: string
	minPrice?: string
	maxPrice?: string
	isAdultOnly?: 'true' | 'false'
	page?: string | number
	perPage: string | number
}

export const EnumGameSort = {
	LOW_PRICE: 'LOW_PRICE',
	HIGH_PRICE: 'HIGH_PRICE',
	OLDEST: 'OLDEST',
	NEWEST: 'NEWEST',
} as const

export type EnumGameSort = (typeof EnumGameSort)[keyof typeof EnumGameSort]

export type TypeParamsFilters = {
	searchParams: TypeGameDataFilters
}
