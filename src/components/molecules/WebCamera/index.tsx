import { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '../../atoms';
import StyledContainer from './styles';

const WebCamera = ({ handleTakePhoto, setOpenCamera }): JSX.Element => {
  const webcamRef = useRef<Webcam>(null);
  const { t } = useTranslation('webcamera');

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    handleTakePhoto(imageSrc);
  }, [webcamRef]);
  return (
    <StyledContainer>
      <IconButton handleClick={() => setOpenCamera(false)} icon={<CloseIcon className='icon' />} />
      <Webcam
        className='webcamCapture'
        screenshotFormat='image/jpeg'
        ref={webcamRef}
        onUserMediaError={(e) => {
          console.error(e);
        }}
        videoConstraints={{
          facingMode: 'user',
          width: { max: 600 },
        }}
      />
      <Button onClick={capture} text={t('button')} />
    </StyledContainer>
  );
};
export default WebCamera;
