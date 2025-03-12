import React, { useState } from 'react';
import { 
  Box,
  Typography, 
  TextField, 
  InputAdornment, 
  List, 
  ListItem, 
  ListItemText, 
  Button,styled
} from '@mui/material';
import { Search, Add } from '@mui/icons-material';


// Styled Material UI components
const HistoryContainer = styled(Box)`
  width: 280px;
  height: 100vh;
  border-right: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette?.background.paper || '#ffffff'};
`;

const HeaderSection = styled(Box)`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
`;

const SearchSection = styled(Box)`
  padding: 16px;
`;

const ConversationList = styled(Box)`
  flex: 1;
  overflow-y: auto;
`;

const ConversationItem = styled(ListItem)`
  border-left: ${props => props.selected ? '4px solid #1976d2' : '4px solid transparent'};
  background-color: ${props => props.selected ? 'rgba(25, 118, 210, 0.08)' : 'transparent'};
  &:hover {
    background-color: ${props => props.selected ? 'rgba(25, 118, 210, 0.12)' : 'rgba(0, 0, 0, 0.04)'};
  }
`;

const ButtonSection = styled(Box)`
  padding: 16px;
  border-top: 1px solid ${props => props.theme.palette?.divider || '#e0e0e0'};
`;

const NewChatButton = styled(Button)`
  width: 100%;
`;

const LeftHist = () => {
  // Sample conversation history data - replace with your actual data when connected to database
  const [conversations, setConversations] = useState([
    { id: 1, title: "Project Discussion", timestamp: "Today" },
    { id: 2, title: "Customer Support", timestamp: "Yesterday" },
    { id: 3, title: "API Integration Help", timestamp: "Mar 8" },
    { id: 4, title: "Deployment Issues", timestamp: "Mar 7" },
    { id: 5, title: "React Component Design", timestamp: "Mar 5" },
  ]);
  
  const [selectedConversation, setSelectedConversation] = useState(1);
  
  return (
    <HistoryContainer>
      <HeaderSection>
        <Typography variant="h6" component="h2">Chat History</Typography>
      </HeaderSection>
      
      <SearchSection>
        <TextField
          fullWidth
          size="small"
          placeholder="Search conversations..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </SearchSection>
      
      <ConversationList>
        <List disablePadding>
          {conversations.map((convo) => (
            <ConversationItem
              key={convo.id}
              selected={selectedConversation === convo.id}
              onClick={() => setSelectedConversation(convo.id)}
              button
            >
              <ListItemText
                primary={convo.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                      Last message preview...
                    </Typography>
                    <Typography component="span" variant="caption" color="text.secondary">
                      {convo.timestamp}
                    </Typography>
                  </>
                }
              />
            </ConversationItem>
          ))}
        </List>
      </ConversationList>
      
      <ButtonSection>
        <NewChatButton 
          variant="contained" 
          color="primary" 
          startIcon={<Add />}
        >
          New Chat
        </NewChatButton>
      </ButtonSection>
    </HistoryContainer>
  );
};

export default LeftHist;