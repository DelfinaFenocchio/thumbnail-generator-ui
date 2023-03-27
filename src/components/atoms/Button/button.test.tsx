import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from './index';

afterAll(cleanup);

const mockedProps = {
  onClick: vi.fn(),
  text: 'Continuar',
};

describe('<Button />', () => {
  it('Has a button and calls onPress function', async () => {
    const { getByText } = render(<Button text={mockedProps.text} onClick={mockedProps.onClick} />);
    expect(getByText(mockedProps.text)).toBeInTheDocument();
    const button = getByText(mockedProps.text);
    fireEvent.click(button);
    expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('Text is rendered into the button', async () => {
    const { getByText } = render(<Button text={mockedProps.text} />);
    const button = getByText(mockedProps.text);
    expect(button).toHaveTextContent(mockedProps.text);
  });

  it('Verify button disabled', async () => {
    const { getByRole } = render(<Button text={mockedProps.text} disabled={true} />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });
});
