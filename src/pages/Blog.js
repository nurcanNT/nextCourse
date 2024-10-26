import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Grid, Typography, Container, Button, Avatar, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

// Example blog data
const initialBlogs = [
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
  const [blogs, setBlogs] = useState(initialBlogs);
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    author: '',
    date: new Date().toLocaleDateString('tr-TR'), 
    image: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBlog = () => {
    setBlogs([...blogs, newBlog]); 
    handleClose(); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value
    }));
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      minHeight="100%" 
    >
      <Header />
      <Container 
        maxWidth="lg" 
        sx={{ py: 5, flexGrow: 1, paddingBottom: '100px' }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Blog Yazılarımız
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Dijital dünyada öne çıkmanızı sağlayacak ipuçları ve en son trendler
          </Typography>
        </Box>

        {/* Blog Ekle Butonu */}
        <Box textAlign="center" mb={5}>
          <Button variant="contained" sx={{ backgroundColor: '#4caf50',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },}} onClick={handleClickOpen}>
            Blog Ekle
          </Button>
        </Box>

        {/* Blog Ekleme Formu */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Yeni Blog Ekle</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Başlık"
              name="title"
              fullWidth
              variant="outlined"
              value={newBlog.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Açıklama"
              name="description"
              fullWidth
              variant="outlined"
              value={newBlog.description}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Yazar"
              name="author"
              fullWidth
              variant="outlined"
              value={newBlog.author}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Tarih"
              name="date"
              fullWidth
              variant="outlined"
              value={newBlog.date}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Resim URL"
              name="image"
              fullWidth
              variant="outlined"
              value={newBlog.image}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              İptal
            </Button>
            <Button onClick={handleAddBlog} sx={{ backgroundColor: '#4caf50',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },}}>
              Ekle
            </Button>
          </DialogActions>
        </Dialog>

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
    </Box>
  );
};

export default Blog;
