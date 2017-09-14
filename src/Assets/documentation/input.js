import map from 'lodash/map';

const inputInfo = [
  {
    title: "Read Docs",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nisl vitae urna interdum tempus. Nunc iaculis risus eu tincidunt condimentum. Donec tempus dignissim nisi, et egestas lorem auctor at.</p>`,
  }
]

const inputDocs = map(inputInfo, (data) => ({
  header: `${data.title}`,
  body: `${data.content}`,
}));

export default inputDocs;
