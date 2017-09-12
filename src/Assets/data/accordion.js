// Dependencies
import map from 'lodash/map';

const mockData = [
  {
    id: 1,
    content: "First - Lorem Ipsum",
  },
  {
    id: 2,
    content: "Second - Lorem Ipsum",
  },
  {
    id: 3,
    content: "Third - Lorem Ipsum",
  },
  {
    id: 4,
    content: "Fourth - Lorem Ipsum",
  }
]

const accordionData = map(mockData, (data) => ({
  header: `Click me to expand, ${data.id}`,
  body: `${data.content}`,
}));

export default accordionData;
