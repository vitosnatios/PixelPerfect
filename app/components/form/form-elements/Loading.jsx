import { BarLoader } from 'react-spinners';

const Loading = () => (
  <BarLoader
    cssOverride={{
      padding: '0',
      margin: '1rem auto',
      width: '25%',
    }}
    color='#fb6900'
  />
);

export default Loading;
