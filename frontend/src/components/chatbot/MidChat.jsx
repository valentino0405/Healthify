import React from 'react';
import { 
  Box,
  Typography, 
  IconButton, 
  MenuItem,
  Select,
  FormControl,
  InputLabel,styled
} from '@mui/material';
import { MoreVert, Add, Info } from '@mui/icons-material';


// Styled Material UI components
const ChatContainer = styled(Box)`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.palette?.background.paper || '#ffffff'};
`;

const MessagesArea = styled(Box)`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background-color: ${props => props.theme.palette?.background.default || '#f5f5f5'};
`;

const MessageContainer = styled(Box)`
  display: flex;
  margin-bottom: 16px;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled(Box)`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${props => props.isUser ? '#1976d2' : props.theme.palette?.background.paper || '#ffffff'};
  color: ${props => props.isUser ? '#ffffff' : props.theme.palette?.text.primary || '#000000'};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageTimestamp = styled(Typography)`
  margin-top: 4px;
  text-align: right;
  opacity: 0.7;
`;

const ModelSelectionBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: ${props => props.theme.palette?.background.default || '#f5f5f5'};
  border-top: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
`;

const MidChat = () => {
  // Sample chat messages - replace with your actual data when connected to database
  const messages = [
    { id: 1, sender: 'bot', text: 'Hello! How can I help you today?', timestamp: '10:30 AM' },
    { id: 2, sender: 'user', text: 'I need help with the API integration.', timestamp: '10:31 AM' },
    { id: 3, sender: 'bot', text: 'Sure! Which API are you trying to integrate?', timestamp: '10:31 AM' },
    { id: 4, sender: 'user', text: 'I want to connect to the payment gateway API.', timestamp: '10:32 AM' },
    { id: 5, sender: 'bot', text: 'Great! For payment gateway integration, you\'ll need to follow these steps:\n\n1. Register for an API key\n2. Install the client library\n3. Configure your environment variables\n4. Implement the payment flow\n\nDo you have any specific questions about any of these steps?', timestamp: '10:33 AM' },
  ];

  return (
    <ChatContainer>
      <ChatHeader>
        <Box>
          <Typography variant="h6">API Integration Help</Typography>
          <Typography variant="body2" color="textSecondary">Started March 8, 2025</Typography>
        </Box>
        
        <IconButton size="small">
          <MoreVert />
        </IconButton>
      </ChatHeader>
      
      <MessagesArea>
        <Box sx={{ maxWidth: '850px', mx: 'auto' }}>
          {messages.map((message) => (
            <MessageContainer key={message.id} isUser={message.sender === 'user'}>
              <MessageBubble isUser={message.sender === 'user'}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                  {message.text}
                </Typography>
                <MessageTimestamp variant="caption" color={message.sender === 'user' ? 'inherit' : 'textSecondary'}>
                  {message.timestamp}
                </MessageTimestamp>
              </MessageBubble>
            </MessageContainer>
          ))}
        </Box>
      </MessagesArea>
      
      <ModelSelectionBar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>AI Model:</Typography>
          <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
            <Select defaultValue="chatgpt4">
              <MenuItem value="chatgpt4">ChatGPT-4</MenuItem>
              <MenuItem value="gpt35">GPT-3.5 Turbo</MenuItem>
              <MenuItem value="claude">Claude</MenuItem>
              <MenuItem value="gemini">Gemini Pro</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box>
          <IconButton size="small">
            <Add />
          </IconButton>
          <IconButton size="small">
            <Info />
          </IconButton>
        </Box>
      </ModelSelectionBar>
    </ChatContainer>
  );
};

export default MidChat;