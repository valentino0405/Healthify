import React, { useState } from 'react';
import { 
  Box,
  TextField, 
  IconButton, 
  Typography ,styled
} from '@mui/material';
import { Send, AttachFile, EmojiEmotions, Image } from '@mui/icons-material';


// Styled Material UI components
const InputContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 280px;
  right: 0;
  background-color: ${props => props.theme.palette?.background.paper || '#ffffff'};
  border-top: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
  padding: 16px;
`;

const MessageForm = styled(Box)`
  max-width: 850px;
  margin: 0 auto;
`;

const TextFieldContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ActionButtonsContainer = styled(Box)`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
`;

const HelpTextContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Bottom = () => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend/API
    console.log('Sending message:', message);
    setMessage('');
  };
  
  return (
    <InputContainer>
      <MessageForm component="form" onSubmit={handleSubmit}>
        <TextFieldContainer>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            variant="outlined"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                paddingLeft: '100px',
                paddingRight: '60px'
              }
            }}
          />
          
          <ActionButtonsContainer>
            <IconButton size="small">
              <AttachFile fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <EmojiEmotions fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Image fontSize="small" />
            </IconButton>
          </ActionButtonsContainer>
          
          <IconButton 
            sx={{ position: 'absolute', bottom: '8px', right: '8px' }}
            color="primary"
            disabled={!message.trim()}
            type="submit"
          >
            <Send />
          </IconButton>
        </TextFieldContainer>
        
        <HelpTextContainer>
          <Typography variant="caption" color="textSecondary">
            Type '/' for commands
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Press Enter to send, Shift+Enter for new line
          </Typography>
        </HelpTextContainer>
      </MessageForm>
    </InputContainer>
  );
};

export default Bottom;