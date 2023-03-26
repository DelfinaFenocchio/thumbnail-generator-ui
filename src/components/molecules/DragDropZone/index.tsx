import { useTranslation } from 'react-i18next';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import Alert from '@mui/material/Alert';
import { useDragDrop, useCustomTheme } from '@hooks';
import { FileTypeDescription } from '@atoms';
import { StyledBox, StyledArea } from './styles';

/**
 * Drag and drop files or click to upload a file
 * @param {() => void} handleImageSelected function to save image selected and preview before generating thumbnails
 * @returns {JSX.Element}
 */
const DragDropZone = ({ handleImageSelected }): JSX.Element => {
  const theme = useCustomTheme();
  const { t } = useTranslation('dragdrop');
  const [
    dragActive,
    errorMessage,
    fileInputRef,
    handleDrag,
    handleDrop,
    handleFileInputClicked,
    handleOnChangeInputFile,
  ] = useDragDrop(handleImageSelected);

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
        theme={theme}
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
      {Boolean(errorMessage) && <Alert severity='error'>{t('error_message')}</Alert>}
    </StyledBox>
  );
};

export default DragDropZone;
