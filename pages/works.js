import { SimpleGrid } from '@chakra-ui/react'
import { Section, Part, WorkGrid } from '../components'

// Works Images

import infamesImage from '../public/works/infames.png'
import soonImage from '../public/works/soon.png'

// Works Tables

const MY_WORKS = [
  {
    name: 'InfamesRP',
    disableClick: false,
    imgSrc: infamesImage,
    description: 'FiveM <GTA Framework> roleplay server.'
  },

  {
    name: 'Coming Soon...',
    disableClick: true,
    imgSrc: soonImage,
    description: 'In a near future...'
  }
]

export default function Works() {
  return (
    <Section title="Works">
      <Part title="Works">
        <SimpleGrid columns={[1, 1, 2]} gap={5}>
          {MY_WORKS.map(w => {
            return (
              <WorkGrid
                name={w.name}
                disableClick={w.disableClick}
                imgSrc={w.imgSrc}
                key={w}
              >
                {w.description}
              </WorkGrid>
            )
          })}
        </SimpleGrid>
      </Part>
    </Section>
  )
}
