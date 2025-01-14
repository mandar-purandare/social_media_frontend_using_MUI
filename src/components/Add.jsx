import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { DateRange } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom:"10px"
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpen(true)}
          sx={{
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
            position: "fixed",
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://i.pinimg.com/280x280_RS/56/cb/07/56cb07dd364cbee392f3487cf54ca3a8.jpg"
              onClick={(e) => setOpen(true)}
            />
            <Typography variant="">Mandar Purandare</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack mt={2} mb={3} gap={1} flexDirection='row'>
            <EmojiEmotionsIcon color="primary"/>
            <InsertPhotoIcon color="secondary"/>
            <VideoCameraBackIcon color="success"/>
            <PersonAddIcon color="error"/>
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button>POST</Button>
            <Button  sx={{width:'100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
