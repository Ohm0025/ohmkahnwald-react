import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { Upload } from "lucide-react";
import Cropper from "react-easy-crop";
import useImageCrop from "./imageCrop.hook";

const ImageCrop = ({ username, currentAvatarUrl, onUpdate }) => {
  const {
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
  } = useImageCrop();
  return (
    <>
      <Box
        as="label"
        htmlFor="profile-picture-upload"
        cursor={"pointer"}
        background={"none"}
        display={"block"}
      >
        <Avatar size="2xl" name={username} src={currentAvatarUrl} />
        <Input
          id="profile-picture-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
          ref={fileInputRef}
        />
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crop Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {image && (
              <Box position="relative" height="400px">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleSave(onUpdate)}
            >
              Save
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageCrop;
