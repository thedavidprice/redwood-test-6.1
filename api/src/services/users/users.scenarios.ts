import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String6334499',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: { email: 'String479192', hashedPassword: 'String', salt: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
