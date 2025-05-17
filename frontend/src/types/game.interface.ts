export interface IGame {
	id: string
	title: string
	image: string
	releaseDate: Date
	price: number
	rating: number
	ageRating: string
	developer: string
	publisher: string
	genres: EnumGenre[]
	platforms: EnumPlatform[]
	createdAt: Date
	updatedAt: Date
}

export const EnumGenre = {
	Action: 'Action',
	Adventure: 'Adventure',
	Horror: 'Horror',
	RPG: 'RPG',
	Shooter: 'Shooter',
} as const

export type EnumGenre = (typeof EnumGenre)[keyof typeof EnumGenre]

export const EnumPlatform = {
	Nintendo: 'Nintendo',
	PC: 'PC',
	PlayStation: 'PlayStation',
	Xbox: 'Xbox',
} as const

export type EnumPlatform = (typeof EnumPlatform)[keyof typeof EnumPlatform]

export type TypePaginationGames = {
	length: number
	games: IGame[]
}
