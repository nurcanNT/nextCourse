import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Grid, Typography, Container } from '@mui/material';
import { FaBullhorn, FaChartLine, FaCamera, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const services = [
  { title: 'Sosyal Medya Yönetimi', description: 'Sosyal medya hesaplarınızı yönetin...', icon: <FaBullhorn /> },
  { title: 'Dijital Pazarlama', description: 'Markanızı dijital dünyada büyütün...', icon: <FaChartLine /> },
  { title: 'Reklam Yönetimi', description: 'Reklam kampanyalarınızı optimize edin...', icon: <FaEnvelope /> },
  { title: 'İçerik Üretimi', description: 'Yaratıcı içeriklerle hedef kitlenizi etkileyin...', icon: <FaCamera /> },
  { title: 'Web ve Mobil Geliştirme', description: 'Özelleştirilmiş web ve mobil çözümler...', icon: <FaMobileAlt /> }
];

const Services = () => {
  return (
    <>
    <Header/>
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          Hizmetlerimiz
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Size dijital dünyanın kapılarını açan hizmetler
        </Typography>
      </Box>
      
      {/* Service Boxes */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#2E8B57',
                  color: 'white',
                  transform: 'translateY(-5px)',
                  transition: '0.3s',
                },
              }}
            >
              <Box sx={{ fontSize: 50, mb: 2, color: 'primary.main' }}>{service.icon}</Box>
              <Typography variant="h5" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default Services;
