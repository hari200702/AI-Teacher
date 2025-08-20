import CompanionCards from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      
      <h1 className='text -2xl underline'>Welcome to Saas App</h1>

      <section className='home-section'>
        <CompanionCards 
          id="123"
          name="Neura"
          topic="Neural"
          subject="science"
          duration={45}
          color="#ffda63"
          />

          <CompanionCards 
          id="123"
          name="Neura"
          topic="Neural"
          subject="science"
          duration={45}
          color="#ffda63"
          />

          <CompanionCards 
          id="123"
          name="Neura"
          topic="Neural"
          subject="science"
          duration={45}
          color="#ffda63"
          />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
      />
        <CTA />
      </section>
    </main>
  )
}

export default Page