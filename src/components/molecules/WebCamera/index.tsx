import { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '../../atoms';

const WebCamera = ({ handleTakePhoto, setOpenCamera }): JSX.Element => {
  const webcamRef = useRef<Webcam>(null);
  const { t } = useTranslation('webcamera');

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    const reader = new FileReader();
    const blob = new Blob([JSON.stringify(imageSrc)]);

    reader.onload = (event) => {
      if (event.target != null) {
        handleTakePhoto(JSON.parse(event.target.result));
      }
    };
    reader.readAsText(blob);
  }, [webcamRef]);
  return (
    <>
      <IconButton handleClick={() => setOpenCamera(false)} icon={<CloseIcon className='icon' />} />
      <Webcam
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
    </>
  );
};
export default WebCamera;
