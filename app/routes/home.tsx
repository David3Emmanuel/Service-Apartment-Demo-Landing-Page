import type { Route } from './+types/home'

import Header from '~/components/header'
import Welcome from '~/components/welcome'
import Hero from '~/components/hero'
import Services from '~/components/services'
import Locations from '~/components/locations'
import Footer from '~/components/footer'
import Contact from '~/components/contact'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Premkonsult' },
    { name: 'description', content: 'Your Home Away From Home' },
  ]
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
