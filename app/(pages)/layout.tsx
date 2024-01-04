import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/ui/navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section>
            <Navbar />
            <div className='max-w-screen-xl	pt-5 m-auto'>
                {children}
            </div>
        </section>
    )
}
