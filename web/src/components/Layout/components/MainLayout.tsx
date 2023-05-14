import { AppShell } from '@mantine/core'
import Head from 'next/head'
import { type ReactNode } from 'react'
import { Header } from './Header'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>Next Bazaar</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell header={<Header />}>
        <main>{children}</main>
      </AppShell>
    </>
  )
}
