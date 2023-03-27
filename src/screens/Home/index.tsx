import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, FileUploadForm, ImageList } from '@molecules';
import { Snackbar } from '@atoms';
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
  const [error, setError] = useState(false);
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
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <HomeContainer>
        {imageUrls.length > 0 ? (
          <ImageList
            imageUrls={imageUrls}
            handleClick={() => {
              setImageUrls([]);
            }}
          />
        ) : (
          <FileUploadForm isLoading={isLoading} handleSubmit={handleSubmit} />
        )}
        <Snackbar
          text={t('error')}
          severity={'error'}
          open={error}
          handleClose={() => {
            setError(false);
          }}
        />
      </HomeContainer>
    </Container>
  );
};

export default Home;
