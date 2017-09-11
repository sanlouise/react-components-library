// Dependencies
import map from 'lodash/map';

const mockData = [
  {
    id: 1,
    content: "Uno Lorem Ipsum",
  },
  {
    id: 2,
    content: "Dos Lorem Ipsum",
  },
  {
    id: 3,
    content: "Tres Lorem Ipsum",
  },
  {
    id: 4,
    content: "Cuatro Lorem Ipsum",
  }
]

const accordionData = map(mockData, (data) => ({
  header: `This is header number ${data.id}`,
  body: `Body: ${data.content}`,
}));

export default accordionData;
