import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DragDropZone from '../DragDropZone';
import WebCamera from '../WebCamera';
import { Button, IconButton } from '../../atoms';
import StyledForm from './styles';

interface IUploadFile {
  isLoading: boolean;
  handleSubmit: (image) => Promise<void>;
}

/**
 * File upload form
 * @param {() => Promise<void>} handleSubmit onSubmit function
 * @param {boolean} isLoading indicates if request is loading or not
 * @returns {JSX.Element}
 */
const UploadFileForm = ({ handleSubmit, isLoading }: IUploadFile): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [openCamera, setOpenCamera] = useState(false);
  const { t } = useTranslation('upload_file_form');
  const handleTakePhoto = (cameraImage: string | ArrayBuffer): void => {
    setImagePreview(cameraImage);
    setOpenCamera(false);
  };

  return (
    <StyledForm
      onSubmit={async () => {
        await handleSubmit(imagePreview);
      }}
    >
      <h1>{t('title')}</h1>
      {openCamera ? (
        <WebCamera setOpenCamera={setOpenCamera} handleTakePhoto={handleTakePhoto} />
      ) : (
        <>
          <div className='take-photo'>
            <p>{t('take_photo_question')}</p>
            <div
              className='take-photo-icon'
              onClick={() => {
                setOpenCamera(true);
              }}
            >
              <CameraAltIcon />
            </div>
          </div>
          <DragDropZone handleImageSelected={setImagePreview} />
          {imagePreview !== null && (
            <>
              <IconButton
                handleClick={() => {
                  setOpenCamera(false);
                }}
                icon={
                  <DeleteIcon
                    onClick={() => {
                      setImagePreview(null);
                    }}
                  />
                }
              />

              <div className='preview'>
                <img src={imagePreview} alt='image selected' className='preview-image' />
              </div>
            </>
          )}
          <Button
            text={t('button_generate_thumbnails')}
            type='submit'
            isLoading={isLoading}
            disabled={!imagePreview}
          />
        </>
      )}
    </StyledForm>
  );
};

export default UploadFileForm;
