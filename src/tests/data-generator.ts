import { faker } from '@faker-js/faker';

type Overrides = Record<string, any>;

export const generateBreed = (overrides?: Overrides) => ({
  weight: {
    imperial: faker.datatype.string(5),
    metric: faker.datatype.string(5),
  },
  id: faker.datatype.uuid(),
  name: faker.datatype.string(10),
  cfa_url: faker.internet.url(),
  vetstreet_url: faker.internet.url(),
  vcahospitals_url: faker.internet.url(),
  temperament: faker.datatype.string(50),
  origin: faker.datatype.string(10),
  country_codes: faker.datatype.string(2),
  country_code: faker.datatype.string(2),
  description: faker.lorem.sentence(10),
  life_span: faker.datatype.string(5),
  indoor: faker.datatype.number({ max: 10 }),
  lap: faker.datatype.number({ max: 10 }),
  alt_names: '',
  adaptability: faker.datatype.number({ max: 10 }),
  affection_level: faker.datatype.number({ max: 10 }),
  child_friendly: faker.datatype.number({ max: 10 }),
  dog_friendly: faker.datatype.number({ max: 10 }),
  energy_level: faker.datatype.number({ max: 10 }),
  grooming: faker.datatype.number({ max: 10 }),
  health_issues: faker.datatype.number({ max: 10 }),
  intelligence: faker.datatype.number({ max: 10 }),
  shedding_level: faker.datatype.number({ max: 10 }),
  social_needs: faker.datatype.number({ max: 10 }),
  stranger_friendly: faker.datatype.number({ max: 10 }),
  vocalisation: faker.datatype.number({ max: 10 }),
  experimental: faker.datatype.number({ max: 10 }),
  hairless: faker.datatype.number({ max: 10 }),
  natural: faker.datatype.number({ max: 10 }),
  rare: faker.datatype.number({ max: 10 }),
  rex: faker.datatype.number({ max: 10 }),
  suppressed_tail: faker.datatype.number({ max: 10 }),
  short_legs: faker.datatype.number({ max: 10 }),
  wikipedia_url: faker.internet.url(),
  hypoallergenic: faker.datatype.number({ max: 10 }),
  reference_image_id: faker.datatype.uuid(),
  image: {
    id: faker.datatype.uuid(),
    width: 1204,
    height: 1445,
    url: faker.image.abstract(1204, 1445),
  },
  ...overrides,
});

export const generateBreeds = (numOfBreeds = 5) => {
  return Array.from({ length: numOfBreeds }, generateBreed);
};

export const generateRandomCat = () => {
  const {
    id,
    name,
    image: { url: uri },
  } = generateBreed();

  return { id, name, uri };
};
