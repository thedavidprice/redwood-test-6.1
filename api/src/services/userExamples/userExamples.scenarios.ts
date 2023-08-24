import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String2601329' } },
    two: { data: { email: 'String9515386' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
