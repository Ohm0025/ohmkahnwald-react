import {
  HStack,
  Avatar,
  VStack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  EditIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Upload,
} from "lucide-react";
import DialogBox from "./dialogBox/DialogBox";
import ImageCrop from "./imageCrop/ImageCrop";
import { updateImgProfile } from "../api/user.api";
import useRegisterErrorHook from "../utils/handleError.hook";
import useLoginSuccessHook from "../utils/handleSuccess.hook";
import { updateUserProfile } from "../utils/cacheHandle";
import { useUser } from "../contexts/userContext";
import useLoading from "../stores/loading";

const ProfileHeader = ({ user, onEditProfile, changeUser }) => {
  const { showToast } = useRegisterErrorHook();
  const { showSuccess } = useLoginSuccessHook();
  const { startLoading, stopLoading } = useLoading();

  const onUpdate = async (uploadedImage) => {
    try {
      startLoading();
      const res = await updateImgProfile(uploadedImage);
      if (res.result) {
        changeUser(res.result);
        updateUserProfile({ ...user, imgProfile: res.result });
        showSuccess("change profile picture success");
      }
    } catch (err) {
      showToast(err);
    } finally {
      stopLoading();
    }
  };
  return (
    <HStack
      spacing={{ base: 1, sm: 7 }}
      justifyContent={"space-between"}
      align="center"
      w="full"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Box>
        <ImageCrop
          username={user.username}
          currentAvatarUrl={user.imgProfile}
          onUpdate={onUpdate}
        />
      </Box>

      <VStack
        align={{ base: "center", sm: "start" }}
        spacing={2}
        width={"100%"}
      >
        <Heading as="h2" size="xl">
          {user.username}
        </Heading>
        <Text color="gray.500">{user.email}</Text>
        {user.bio && <DialogBox message={user.bio} />}
        <Button leftIcon={<EditIcon />} onClick={onEditProfile}>
          Edit Profile
        </Button>
      </VStack>
    </HStack>
  );
};

export default ProfileHeader;
