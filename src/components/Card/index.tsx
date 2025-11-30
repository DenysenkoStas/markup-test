import classList from '../../helpers/classList.ts';
import HeartIcon from '../../assets/icons/heart.svg?react';
import CommentIcon from '../../assets/icons/comment.svg?react';
import './index.scss';

interface CardProps {
  view?: 'row' | 'tile';
  img: string;
  imgAlt?: string;
  todayLikes: number;
  todayComments: number;
  selectedDate: string;
  selectedDateLikes: number;
  selectedDateComments: number;
  uploadDate: string;
}

export default function Card({
  view = 'row',
  img,
  imgAlt,
  todayLikes = 0,
  todayComments = 0,
  selectedDate,
  selectedDateLikes = 0,
  selectedDateComments = 0,
  uploadDate
}: CardProps) {
  return (
    <div className={classList('card', {'card--tile': view === 'tile'})}>
      <img className='card__img' src={img} alt={imgAlt ? imgAlt : 'Image'} />

      <div className='card__content'>
        <div className='card__cell'>
          <span className='card__label'>Today</span>
          <div className='card__data'>
            <div className='card__row'>
              <HeartIcon />
              <span className='card__value'>{todayLikes}</span>
            </div>

            <div className='card__row'>
              <CommentIcon />
              <span className='card__value'>{todayComments}</span>
            </div>
          </div>
        </div>

        <div className='card__cell'>
          <span className='card__label'>{selectedDate}</span>
          <div className='card__data'>
            <div className='card__row'>
              <HeartIcon />
              <span className='card__value'>{selectedDateLikes}</span>
            </div>

            <div className='card__row'>
              <CommentIcon />
              <span className='card__value'>{selectedDateComments}</span>
            </div>
          </div>
        </div>

        <div className='card__cell card__cell--upload'>
          <span className='card__label'>Image upload</span>
          <span className='card__upload-date'>{uploadDate}</span>
        </div>
      </div>
    </div>
  );
}
