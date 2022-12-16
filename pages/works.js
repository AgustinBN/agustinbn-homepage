import Section from '../components/Section'
import Part from '../components/Part'
import { SimpleGrid } from '@chakra-ui/react'
import WorkGrid from '../components/WorkGrid'

// Work Src

import infames from '../public/works/infames.png'
import soon from '../public/works/soon.png'

export default function Works() {
  return (
    <Section title="Works">
      <Part title="Works">
        <SimpleGrid columns={[1, 1, 2]} gap={5}>
          <WorkGrid name="InfamesRP" disableClick imgSrc={infames}>
            FiveM {'<GTA Framework>'} roleplay server.
          </WorkGrid>
          <WorkGrid name="Coming Soon..." disableClick imgSrc={soon}>
            Next works...
          </WorkGrid>
        </SimpleGrid>
      </Part>
    </Section>
  )
}
