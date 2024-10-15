import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  ModalFooter,
  Button,
  Container,
} from "@chakra-ui/react";
import { contentStyles } from "../utils/styleObj";

const PreviewModal = ({ isOpen, onClose, content }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Blog Preview</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="gray.50" overflowY="auto">
          <Container maxW="4xl" py={8}>
            <Box
              className="blog-preview"
              dangerouslySetInnerHTML={{ __html: content }}
              sx={contentStyles}
            />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PreviewModal;
