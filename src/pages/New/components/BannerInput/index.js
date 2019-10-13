import React, { useEffect, useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import { MdPhotoCamera } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import api from '~/services/api';
import { Container, Image, Loader } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField, error } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current, file]); // eslint-disable-line

  /**
   * Handle Banner input change
   */
  async function handleChange(e) {
    setLoading(true);
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    setLoading(false);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <Image preview={preview}>
          {!preview && (
            <>
              <MdPhotoCamera size={54} />
              <span>Select Image</span>

              <Loader loading={loading ? true : undefined}>
                <FaSpinner size={18} />
              </Loader>
            </>
          )}
        </Image>

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={e => handleChange(e)}
          ref={ref}
        />
      </label>
      {error && <span className="error">{error}</span>}
    </Container>
  );
}
