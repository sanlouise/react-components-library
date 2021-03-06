import map from 'lodash/map';

const paginationInfo = [
  {
    title: "Read Docs",
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nisl vitae urna interdum tempus. Nunc iaculis risus eu tincidunt condimentum. Donec tempus dignissim nisi, et egestas lorem auctor at.</p>`,
  }
]

const paginationDocs = map(paginationInfo, (data) => ({
  header: `${data.title}`,
  body: `${data.content}`,
}));

export default paginationDocs;
