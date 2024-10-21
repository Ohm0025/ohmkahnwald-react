import { useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { useState, useRef } from "react";
import { getCroppedImg } from "../../utils/handleImage";

const useImageCrop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const fileInputRef = useRef();

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
        onOpen();
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCloseModal = () => {
    setImage(null);
    setCroppedAreaPixels(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    onClose();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = async (cb) => {
    try {
      if (!croppedAreaPixels) return;

      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      cb(croppedImage);
      handleCloseModal();
    } catch (err) {
      console.error("Error updating profile picture: ", err);
    }
  };

  return {
    handleFileChange,
    handleCloseModal,
    fileInputRef,
    isOpen,
    onClose,
    handleSave,
    onCropComplete,
    image,
    crop,
    setCrop,
    zoom,
    setZoom,
  };
};

export default useImageCrop;
