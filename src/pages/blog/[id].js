import { useEffect, useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // URL'deki id parametresini alıyoruz
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      // JSON dosyasını public klasöründen almak için fetch kullanıyoruz
      fetch('/data/blogs.json')
        .then((response) => response.json())
        .then((data) => {
          const selectedBlog = data.find((blog) => blog.id === parseInt(id)); // id'ye göre blogu buluyoruz
          setBlog(selectedBlog);
        })
        .catch((err) => console.error('API Hatası:', err));
    }
  }, [id]);

  // Eğer blog verisi gelmediyse "Yükleniyor..." mesajını göster
  if (!blog) return <div>Yükleniyor...</div>;

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Header />
      <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1, paddingBottom: '100px' }}>
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            {blog?.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {blog?.date} | {blog?.author}
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="body1" paragraph>
            {blog?.content}
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => router.push('/blog/Blog')}
          sx={{
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#45a049',
            },
          }}
        >
          Blog Ana Sayfasına Dön
        </Button>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogDetail;
