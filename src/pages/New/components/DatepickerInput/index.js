import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { DatepickerWrapper } from './styles';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

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

  return (
    <DatepickerWrapper>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        placeholderText="Meetup date"
        onChange={date => setSelected(date)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </DatepickerWrapper>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
