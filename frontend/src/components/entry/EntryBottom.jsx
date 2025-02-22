import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography, CardActions, Button, Box, styled } from '@mui/material';

// Sample Data for Cards
const healthTopics = [
    {
      title: "Healthy Eating",
      description: "A balanced diet provides essential nutrients for overall health and well-being.",
      image: "/images/Healthy.jpg",  // Use relative path from `public/`
    },
    {
      title: "Fitness & Exercise",
      description: "Regular physical activity boosts energy, strengthens muscles, and improves mental health.",
      image: "/images/Gym.jpg",
    },
    {
      title: "Hydration",
      description: "Drinking enough water is crucial for metabolism, energy levels, and detoxification.",
      image: "/images/Hydration.jpg",
    },
    {
      title: "Mental Wellness",
      description: "Meditation and self-care enhance mental clarity, reduce stress, and promote well-being.",
      image: "/images/Mentalwellness.jpg",
    },
    {
      title: "Quality Sleep",
      description: "Adequate sleep improves focus, boosts immunity, and supports overall health.",
      image: "/images/Sleep.jpg",
    },
    {
      title: "Mindfulness",
      description: "Practicing mindfulness helps reduce anxiety, increase focus, and promote emotional stability.",
      image: "/images/Mindfulness.jpg",
    },
    {
      title: "Heart Health",
      description: "A healthy lifestyle, including proper diet and exercise, keeps your heart strong and active.",
      image: "/images/Heart.jpg",
    },
  ];
  



// Card Container (Horizontal Scroll)
const CardContainer = {
    marginTop: "10vh",
    display: "flex",
    gap: "20px",
    overflowX: "auto",  // Enables scrolling
    padding: "20px",
    scrollbarWidth: "none", // Hides scrollbar for smooth scrolling
};

const EntryBottom = () => {
  return (
    <Box sx={CardContainer}>
        {healthTopics.map((topic, index) => (
            <Card key={index} sx={{ minWidth: 300 }}>
                <CardMedia sx={{ height: 180 }} image={topic.image} title={topic.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5">{topic.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{topic.description} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        ))}
    </Box>
  );
};

export default EntryBottom;