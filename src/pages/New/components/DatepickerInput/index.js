import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { getDay, setHours, setMinutes, parseISO } from 'date-fns';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { DatepickerWrapper } from './styles';

export default function DatePicker({ name, selectedDate }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState(
    selectedDate ? parseISO(selectedDate) : null
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  const isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <DatepickerWrapper>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        placeholderText="Meetup date"
        onChange={date => setSelected(date)}
        filterDate={isWeekday}
        showTimeSelect
        timeIntervals={60}
        minTime={setHours(setMinutes(new Date(), 0), 7)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        excludeTimes={[setHours(setMinutes(new Date(), 0), 12)]}
        dateFormat="MMMM d, yyyy h:mm aa"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </DatepickerWrapper>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
};
