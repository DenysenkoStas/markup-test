import Header from './components/Header';
import './assets/styles/main.scss';
import LoadMoreButton from './components/LoadMoreButton';
import GridIcon from './assets/icons/grid.svg?react';
import RowsIcon from './assets/icons/rows.svg?react';
import {useState} from 'react';
import IconButton from './components/IconButton';
import Card from './components/Card';
import classList from './helpers/classList.ts';
import {data} from './helpers/mockupData.ts';

function App() {
  const [view, setView] = useState<'rows' | 'grid'>('rows');

  const visibleData = view === 'grid' ? data.slice(0, 8) : data;

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
            {visibleData.map((card) => (
              <Card view={view === 'grid' ? 'tile' : 'row'} {...card} />
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
