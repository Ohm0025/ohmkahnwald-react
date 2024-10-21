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
import Cropper from "react-easy-crop";
import useImageCrop from "./imageCrop.hook";

const ImageCrop = ({ currentAvatarUrl, onUpdate }) => {
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
      <VStack spacing={4} align="center">
        <Avatar size="2xl" src={currentAvatarUrl} />
        <Button as="label" htmlFor="profile-picture-upload" colorScheme="green">
          Change Profile Picture
          <Input
            id="profile-picture-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
            ref={fileInputRef}
          />
        </Button>
      </VStack>

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
