import { faker } from '@faker-js/faker'
export const data = Array.from({ length: 10 }, (_, index) => {
  const value = faker.name.fullName()
  return {
    id: index,
    value,
    label: faker.name.fullName()
  }
})
