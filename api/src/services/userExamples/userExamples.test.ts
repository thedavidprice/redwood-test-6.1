import type { UserExample } from '@prisma/client'

import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'
import type { StandardScenario } from './userExamples.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario: StandardScenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario(
    'returns a single userExample',
    async (scenario: StandardScenario) => {
      const result = await userExample({ id: scenario.userExample.one.id })

      expect(result).toEqual(scenario.userExample.one)
    }
  )

  scenario('creates a userExample', async () => {
    const result = await createUserExample({
      input: { email: 'String7356109' },
    })

    expect(result.email).toEqual('String7356109')
  })

  scenario('updates a userExample', async (scenario: StandardScenario) => {
    const original = (await userExample({
      id: scenario.userExample.one.id,
    })) as UserExample
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String4189792' },
    })

    expect(result.email).toEqual('String4189792')
  })

  scenario('deletes a userExample', async (scenario: StandardScenario) => {
    const original = (await deleteUserExample({
      id: scenario.userExample.one.id,
    })) as UserExample
    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
