import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, Button, Avatar } from '@mui/material';
import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // JSON dosyasını public klasöründen almak için fetch kullanıyoruz
    fetch('/data/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('API Hatası:', err));
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Header />
      <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1, paddingBottom: '100px' }}>
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Blog Yazılarımız
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Dijital dünyada öne çıkmanızı sağlayacak ipuçları ve en son trendler
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
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
                <Link href={`/blog/${blog.id}`} passHref>
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
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Blog;
