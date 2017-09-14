// Dependencies
import map from 'lodash/map';

const options = [
  {
    id: 1,
    name: "First Option",
    value: "first",
  },
  {
    id: 2,
    name: "Second Option",
    value: "Second",
  },
  {
    id: 3,
    name: "Third Option",
    value: "Third",
  },
  {
    id: 4,
    name: "Fourth Option",
    value: "",
  },
]

const dropdownData = map(options, (data) => ({
  id: `${data.id}`,
  name: `${data.name}`,
  value: `${data.value}`,
}));

export default dropdownData;
