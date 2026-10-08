import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { SelectedWork } from '../sections/SelectedWork'
import { PentayyaFeature } from '../sections/PentayyaFeature'
import { MyselfFeature } from '../sections/MyselfFeature'
import { Filmography } from '../sections/Filmography'
import { Writing } from '../sections/Writing'
import { Vision } from '../sections/Vision'
import { Filmmaking } from '../sections/Filmmaking'
import { Filmmaker } from '../sections/Filmmaker'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <PentayyaFeature />
      <MyselfFeature />
      <Filmography />
      <Writing />
      <Vision />
      <Filmmaking />
      <Filmmaker />
      <Contact />
    </>
  )
}
