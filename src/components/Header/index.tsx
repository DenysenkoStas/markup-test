import DateInput from '../DateInput';
import logo from '../../assets/images/logo.svg';
import './index.scss';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__inner'>
          <img className='header__logo' src={logo} alt='Logo' />

          <div className='header__cell'>
            <div className='header__row header__row--top'>
              <h1 className='header__title'>monblanproject</h1>
              <span className='header__badge'>Start on 17-02-2016</span>
            </div>

            <div className='header__row header__row--info'>
              <span className='header__info'>
                <b>870</b> posts
              </span>
              <span className='header__info'>
                <b>11,787</b> followers
              </span>
              <span className='header__info'>
                <b>112</b> following
              </span>
            </div>

            <div className='header__row header__row--filter'>
              <span className='header__label'>Date</span>

              <div className='input-row'>
                <DateInput placeholder='from' />
                <DateInput placeholder='to' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
