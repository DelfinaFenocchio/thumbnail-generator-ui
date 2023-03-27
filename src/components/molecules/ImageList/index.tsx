import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Button, Snackbar } from '@atoms';
import { type DataImage } from '@globalConstants';
import StyledImagesContainer from './styles';

/**
 * Image List
 * Shows the thumbnails generated with the option to copy the url on click
 */
const ImagesList = ({ imageUrls, handleClick }): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation('image_list');

  /**
   * Copy some text to the clipboard
   * @param {string} text text to copy
   */
  const copyTextToClipboard = async (text): Promise<void> => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text);
    }
  };

  /**
   * onClick handler function for the copy button
   * @param copyUrl
   */
  const handleCopyClick = async (copyUrl): Promise<void> => {
    try {
      await copyTextToClipboard(copyUrl);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledImagesContainer>
      <div>
        <h1 className='title'>{t('title_thumbnails_ready')}</h1>

        <div className='images-grid'>
          {imageUrls.map((image: DataImage) => (
            <div
              className='image-container'
              key={image.id}
              onClick={() => {
                handleCopyClick(image.url);
              }}
            >
              <img src={image.url} alt='thumbnail' className='image' />
              <div className='url-container'>
                <p className='url-text'>URL</p>
                <FileCopyIcon />
              </div>
            </div>
          ))}
        </div>
        <Button text={t('generate_other_thumbnails')} type='button' onClick={handleClick} />
      </div>

      <Snackbar
        text={t('copied')}
        severity={'success'}
        open={isCopied}
        handleClose={() => {
          setIsCopied(false);
        }}
      />
    </StyledImagesContainer>
  );
};

export default ImagesList;
