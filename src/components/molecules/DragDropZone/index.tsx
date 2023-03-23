import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import Alert from '@mui/material/Alert';
import { FileTypeDescription } from '../../atoms';
import { StyledBox, StyledArea } from './styles';

/**
 * Drag and drop files or click to upload a file
 * @param {() => void} handleImageSelected function to save image selected and preview before generating thumbnails
 * @returns {JSX.Element}
 */
const DragDropZone = ({ handleImageSelected }): JSX.Element => {
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const fileInputRef = useRef(null);
  const { t } = useTranslation('dragdrop');

  // handle drag events
  const handleDrag = (e): void => {
    e.preventDefault();
    e.stopPropagation();
    if (errorMessage) {
      setErrorMessage(false);
    }
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const isValidFile = (file): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return validTypes.includes(file.type);
  };

  const handleFile = (file): void => {
    if (isValidFile(file)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        if (event.target != null) {
          handleImageSelected(event.target.result);
        }
      };
    } else {
      handleImageSelected(null);
      setErrorMessage(true);
    }
  };

  const handleDrop = (e): void => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputClicked = (): void => {
    fileInputRef.current.click();
  };

  const handleOnChangeInputFile = (): void => {
    if (fileInputRef.current.files.length) {
      handleFile(fileInputRef.current.files[0]);
    }
  };

  return (
    <StyledBox>
      <StyledArea
        className='drag-drop-area'
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDragEnter={handleDrag}
        onDrop={handleDrop}
        onClick={handleFileInputClicked}
        dragActive={dragActive}
      >
        <input
          ref={fileInputRef}
          type='file'
          className='input-file-upload'
          multiple={false}
          onChange={handleOnChangeInputFile}
          accept='image/jpeg, image/jpg, image/png'
        />
        <p>{t('body_help')}</p>
        <FileTypeDescription icon={<PhotoOutlinedIcon />} title='Images' body='PNG, JPG, JPEG' />
      </StyledArea>
      {errorMessage && <Alert severity='error'>{t('error_message')}</Alert>}
    </StyledBox>
  );
};

export default DragDropZone;
