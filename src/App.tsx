import {useState} from 'react';
import Header from './components/Header';
import LoadMoreButton from './components/LoadMoreButton';
import IconButton from './components/IconButton';
import Card from './components/Card';
import classList from './helpers/classList.ts';
import {mockData, mockDataAlt} from './helpers/mockupData.ts';
import GridIcon from './assets/icons/grid.svg?react';
import RowsIcon from './assets/icons/rows.svg?react';
import './assets/styles/main.scss';

function App() {
  const [view, setView] = useState<'rows' | 'grid'>('rows');
  const data = view === 'grid' ? mockDataAlt : mockData;

  return (
    <>
      <Header />
      <main className='main'>
        <div className='container'>
          <div className='actions'>
            <IconButton icon={<GridIcon />} active={view === 'grid'} onClick={() => setView('grid')} />
            <IconButton icon={<RowsIcon />} active={view === 'rows'} onClick={() => setView('rows')} />
          </div>

          <div className={classList('list', {'list--grid': view === 'grid'})}>
            {data.map((card, index) => (
              <Card key={index} view={view === 'grid' ? 'tile' : 'row'} {...card} />
            ))}
          </div>

          <div className='load-more-wrap'>
            <LoadMoreButton />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
