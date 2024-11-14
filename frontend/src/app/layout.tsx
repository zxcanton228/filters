import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import Providers from '@/providers/Providers'

import './globals.css'

export const metadata: Metadata = {
	title: {
		absolute: 'KGame store',
		template: `%s | KGame store`,
	},
}

const russo = Noto_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-russo',
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='ru' className={russo.variable}>
			<body>
				<Providers>
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
