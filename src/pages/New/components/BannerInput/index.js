import React, { useEffect, useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import api from '~/services/api';
import { Container, Image } from './styles';

export default function BannerInput({ name }) {
  const { defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, file]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  console.tron.log(preview);
  return (
    <Container>
      <label htmlFor="banner">
        <Image preview={preview}>
          {!preview && (
            <>
              <MdPhotoCamera size={54} />
              <span>Select Image</span>
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
