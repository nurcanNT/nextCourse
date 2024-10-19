import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Grid, Typography, Container, Button, Avatar } from '@mui/material';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

// Example blog data
const blogs = [
  {
    title: 'Dijital Pazarlamada Başarılı Olmanın Yolları',
    description: 'Dijital pazarlamada markanızı büyütmenin ve daha geniş kitlelere ulaşmanın yollarını öğrenin...',
    author: 'Ahmet Yılmaz',
    date: '19 Ekim 2024',
    image: '/blog1.jpg'
  },
  {
    title: 'Sosyal Medya Stratejileri: 2024 Güncellemeleri',
    description: 'Sosyal medya platformlarındaki en son trendler ve 2024 için strateji önerileri...',
    author: 'Fatma Demir',
    date: '15 Ekim 2024',
    image: '/blog2.jpg'
  },
  {
    title: 'İçerik Üretiminde Yaratıcılığı Arttırma Yöntemleri',
    description: 'Hedef kitlenizi etkileyen yaratıcı içerikler nasıl üretebilirsiniz? İşte ipuçları...',
    author: 'Can Kılıç',
    date: '10 Ekim 2024',
    image: '/blog3.jpg'
  }
];

const Blog = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Blog Yazılarımız
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Dijital dünyada öne çıkmanızı sağlayacak ipuçları ve en son trendler
          </Typography>
        </Box>

        {/* Blog Grid */}
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: '0.3s',
                  },
                }}
              >
                <Box
                  component="img"
                  src={blog.image}
                  alt={blog.title}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '15px',
                  }}
                />
                <Typography variant="h5" component="h3" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={2}>
                  {blog.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 24, height: 24 }}>
                    <FaUser />
                  </Avatar>
                  <Typography variant="body2" color="textSecondary">
                    {blog.author}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 24, height: 24 }}>
                    <FaCalendarAlt />
                  </Avatar>
                  <Typography variant="body2" color="textSecondary">
                    {blog.date}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },
                  }}
                >
                  Devamını Oku
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
