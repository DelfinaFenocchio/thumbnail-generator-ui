import { useState, useRef, type DragEventHandler, type RefObject } from 'react';

const useDragDrop = (
  handleImageSelected
): [
  boolean,
  boolean,
  RefObject<HTMLInputElement>,
  DragEventHandler,
  DragEventHandler,
  () => void,
  () => void
] => {
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * @param file
   * @returns if a file is valid or not.
   */
  const isValidFile = (file): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return validTypes.includes(file.type);
  };

  /**
   * if file is valid, saves the image selected
   * otherwise sets error message to true
   * @param file
   */
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

  /**
   * handle dragenter, dragover and dragleave events to display drag active styles
   * @param e
   */
  const handleDrag: DragEventHandler = (e) => {
    e.preventDefault();
    if (errorMessage) {
      setErrorMessage(false);
    }
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  /**
   * handle drop function. This function is called when the user drops the file
   * @param e
   */
  const handleDrop: DragEventHandler = (e): void => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  /**
   * handle any click on the drag and drop area. Triggers the hidden input field by using its ref.
   */
  const handleFileInputClicked = (): void => {
    fileInputRef.current?.click();
  };

  /**
   * handle onchange input function
   */
  const handleOnChangeInputFile = (): void => {
    if (fileInputRef.current?.files != null && fileInputRef.current?.files?.length > 0) {
      handleFile(fileInputRef.current?.files[0]);
    }
  };

  return [
    dragActive,
    errorMessage,
    fileInputRef,
    handleDrag,
    handleDrop,
    handleFileInputClicked,
    handleOnChangeInputFile,
  ];
};

export default useDragDrop;
