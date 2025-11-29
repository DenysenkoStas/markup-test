import './index.scss';

interface LoadMoreButtonProps {
  onClick?: () => void;
}

export default function LoadMoreButton({onClick}: LoadMoreButtonProps) {
  return (
    <button className='load-more-btn' type='button' onClick={onClick}>
      LOAD MORE
    </button>
  );
}
