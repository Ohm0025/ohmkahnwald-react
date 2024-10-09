import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import useLoading from "../stores/loading";

const LoadingSpinner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, textLoad } = useLoading();

  React.useEffect(() => {
    if (isLoading) {
      onOpen();
    } else {
      onClose();
    }
  }, [isLoading, onOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}} // Empty function to prevent closing
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent bg="transparent" boxShadow="none">
        <VStack spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text color="white" fontWeight="bold" fontSize="lg">
            {textLoad}
          </Text>
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default LoadingSpinner;
