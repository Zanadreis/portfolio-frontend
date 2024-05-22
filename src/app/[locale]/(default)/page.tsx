export const metadata = {
  title: 'Zanadreis',
  description: 'Zanareis - Portfolio',
} 

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
    </>
  )
}
