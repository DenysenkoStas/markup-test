import React, {useState, forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import type {ReactDatePickerCustomHeaderProps} from 'react-datepicker';
import {format} from 'date-fns';
import CalendarIcon from '../../assets/icons/calendar.svg?react';
import ClearIcon from '../../assets/icons/plus.svg?react';
import DoubleArrowIcon from '../../assets/icons/double-arrow.svg?react';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

type CustomInputProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  placeholder?: string;
  onClear: () => void;
};

export interface DateInputProps {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  dateFormat?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({value, onClick, placeholder, onClear}, ref) => {
  return (
    <div className='date-input__wrapper'>
      <input
        ref={ref}
        value={value ?? ''}
        onClick={onClick}
        readOnly
        placeholder={placeholder}
        className='date-input__field'
      />

      <button
        type='button'
        className='date-input__icon-btn date-input__icon-btn--clear'
        onClick={(e) => {
          e.stopPropagation();
          onClear();
        }}
      >
        <ClearIcon />
      </button>

      <button type='button' className='date-input__icon-btn date-input__icon-btn--calendar' onClick={onClick}>
        <CalendarIcon />
      </button>
    </div>
  );
});

CustomInput.displayName = 'CustomInput';

export default function DateInput({
  value,
  defaultValue = null,
  onChange,
  placeholder = 'dd_mm_yyyy',
  dateFormat = 'dd_MM_yyyy'
}: DateInputProps) {
  const [internalDate, setInternalDate] = useState<Date | null>(defaultValue);

  const isControlled = value !== undefined;
  const selectedDate = isControlled ? (value ?? null) : internalDate;

  const columnWeekday = selectedDate ? selectedDate.getDay() : new Date().getDay();

  const getDayClassName = (date: Date): string => {
    return date.getDay() === columnWeekday ? 'react-datepicker__day--same-column' : '';
  };

  const handleChange = (newDate: Date | null) => {
    if (!isControlled) {
      setInternalDate(newDate);
    }
    onChange?.(newDate);
  };

  const handleClear = () => {
    handleChange(null);
  };

  return (
    <div className='date-input'>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat={dateFormat}
        placeholderText={placeholder}
        customInput={<CustomInput onClear={handleClear} />}
        popperPlacement='bottom-start'
        calendarClassName='date-input__calendar'
        popperClassName='date-input__popper'
        showPopperArrow
        dayClassName={getDayClassName}
        renderCustomHeader={(props: ReactDatePickerCustomHeaderProps) => {
          const {date, decreaseMonth, increaseMonth} = props;

          return (
            <div className='date-input__header'>
              <button className='date-input__nav' type='button' onClick={decreaseMonth}>
                <DoubleArrowIcon />
              </button>
              <span className='date-input__current-month'>{format(date, 'MMMM yyyy')}</span>
              <button className='date-input__nav' type='button' onClick={increaseMonth}>
                <DoubleArrowIcon />
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}
