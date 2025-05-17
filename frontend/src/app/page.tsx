import { GameService } from '@/services/game.service'
import type { TypeGameDataFilters } from '@/services/game.types'
import { GameExplorer } from './home/GameExplorer'

export const revalidate = 60

async function getGames(searchParams: TypeGameDataFilters) {
	const data = await GameService.getAll({
		...searchParams,
		perPage: searchParams.perPage || 9,
	})
	return data
}

export default async function HomePage({
	searchParams,
}: {
	searchParams: Promise<TypeGameDataFilters>
}) {
	const data = await getGames(await searchParams)

	return <GameExplorer initialGames={data} />
}
