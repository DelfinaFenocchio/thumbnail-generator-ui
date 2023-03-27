import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Container, FileUploadForm } from '@molecules';
import { Button, Snackbar } from '@atoms';
import { type DataImage } from '@globalConstants';
import { generateThumbnails } from '@services';
import { HomeContainer } from './styles';

/**
 * Home screen
 * If the are thumbnails, render the list with urls
 * Otherwise it shows the form to uploag an image
 *
 */
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<DataImage[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation('home');

  /**
   * Function to generate thumbnails
   * @param image
   */
  const handleSubmit = async (image) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', image);
      const data = await generateThumbnails(formData);
      setImageUrls(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

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
    <Container>
      <HomeContainer>
        {imageUrls.length > 0 ? (
          <div>
            <h2>{t('title_thumbnails_ready')}</h2>
            <div className='images-grid'>
              {imageUrls.map((image: DataImage) => (
                <div
                  className='image-container'
                  key={image.id}
                  onClick={() => {
                    handleCopyClick(image.url);
                  }}
                >
                  <img src={image.url} alt='probando' className='image' />
                  <span>
                    <p>URL</p>
                    <FileCopyIcon />
                  </span>
                </div>
              ))}
            </div>
            <Button
              text={t('generate_other_thumbnails')}
              type='button'
              onClick={() => {
                setImageUrls([]);
              }}
            />
          </div>
        ) : (
          <FileUploadForm isLoading={isLoading} handleSubmit={handleSubmit} />
        )}
        <Snackbar
          text={t('copied')}
          severity={'success'}
          open={isCopied}
          handleClose={() => {
            setIsCopied(false);
          }}
        />
      </HomeContainer>
    </Container>
  );
};

export default Home;
