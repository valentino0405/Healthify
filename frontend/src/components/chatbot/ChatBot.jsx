import React from 'react';
import { Box } from '@mui/material';
import LeftHist from './LeftHist';
import MidChat from './MidChat';
import Bottom from './Bottom';

const ChatBot = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      overflow: 'hidden', 
      bgcolor: 'background.default' 
    }}>
      {/* Left sidebar - chat history */}
      <LeftHist />
      
      {/* Main chat area - messages and input */}
      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative' 
      }}>
        <MidChat />
        <Box sx={{ pb: 20 }}>
          {/* This space ensures content isn't hidden behind the fixed Bottom component */}
        </Box>
        <Bottom />
      </Box>
    </Box>
  );
};

export default ChatBot;