import { Box, styled, Button, FormControl, TextField, Typography, InputAdornment } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Container = styled(Box)`
    width: 60vw;
    margin: 5% auto;
    display: flex;
    height: 70vh;
    box-shadow: -13px 20px 40px 11px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: hidden;
`;

const LeftContainer = styled(Box)`
    flex: 1;
    background: linear-gradient(to right, #141E30, #243B55);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 20px;
`;

const RightContainer = styled(Box)`
    flex: 1.5;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

const SocialIconsContainer = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
`;

const StyledButton = styled(Button)`
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
`;

const SignUp = () => {
    return (
        <Container>
            {/* LEFT SIDE (Welcome Message) */}
            <LeftContainer>
                <Typography variant="h4" fontWeight="bold">Welcome Back!</Typography>
                <Typography variant="body1" textAlign="center">
                    To keep connected with us please <br/> login with your personal info
                </Typography>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <StyledButton variant="outlined" sx={{ borderColor: "white", color: "white", width: '10vw' }}>Sign In</StyledButton>
                </Link>
            </LeftContainer>

            {/* RIGHT SIDE (Sign Up Form) */}
            <RightContainer>
                <Typography variant="h4" fontWeight="bold">Create Account</Typography>
                <SocialIconsContainer>
                    <FacebookOutlinedIcon fontSize="large" />
                    <GoogleIcon fontSize="large" />
                    <LinkedInIcon fontSize="large" />
                </SocialIconsContainer>
                <Typography variant="body2" color="gray">or use your email for registration</Typography>
                
                <FormControl fullWidth>
                    <TextField
                        name="name"
                        placeholder="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        name="email"
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        name="password"
                        type="password"
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <HttpsIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <StyledButton variant="contained" color="primary" sx={{ background: "black", color: "white", width: '10vw' }}>Sign Up</StyledButton>
            </RightContainer>
        </Container>
    );
};

export default SignUp;
