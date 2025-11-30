import type {ReactElement} from 'react';
import classList from '../../helpers/classList.ts';
import './index.scss';

interface IconButtonProps {
  icon: ReactElement;
  active?: boolean;
  onClick?: () => void;
}

export default function IconButton({icon, active = false, onClick}: IconButtonProps) {
  return (
    <button className={classList('icon-btn', {'icon-btn--active': active})} type='button' onClick={onClick}>
      {icon}
    </button>
  );
}
