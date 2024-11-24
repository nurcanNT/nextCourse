import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, Button, Avatar, Modal, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Arama çubuğu için state
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    image: '',
    author: '',
    date: '',
  });

  useEffect(() => {
    // JSON dosyasını public klasöründen almak için fetch kullanıyoruz
    fetch('/data/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('API Hatası:', err));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBlog = () => {
    const newBlogEntry = {
      ...newBlog,
      id: blogs.length + 1, // Yeni bir ID atanıyor
      date: new Date().toISOString().split('T')[0], // Güncel tarih
    };

    setBlogs((prevBlogs) => [newBlogEntry, ...prevBlogs]);
    handleClose();
  };

  // Arama sonuçlarına göre filtrelenmiş bloglar
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Arama Çubuğu */}
        <Box display="flex" justifyContent="center" mb={4}>
          <TextField
            placeholder="Bloglarda ara..."
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box display="flex" justifyContent="center" mb={4}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Makale Yaz
          </Button>
        </Box>
        <Grid container spacing={4}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
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
            ))
          ) : (
            <Typography variant="h6" color="textSecondary" textAlign="center">
              Aramanızla eşleşen blog bulunamadı.
            </Typography>
          )}
        </Grid>
      </Container>

      <Footer />

      {/* Makale Ekleme Modalı */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Yeni Makale Ekle
          </Typography>
          <TextField
            label="Başlık"
            name="title"
            fullWidth
            margin="normal"
            value={newBlog.title}
            onChange={handleChange}
          />
          <TextField
            label="Açıklama"
            name="description"
            fullWidth
            margin="normal"
            value={newBlog.description}
            onChange={handleChange}
          />
          <TextField
            label="Görsel URL"
            name="image"
            fullWidth
            margin="normal"
            value={newBlog.image}
            onChange={handleChange}
          />
          <TextField
            label="Yazar"
            name="author"
            fullWidth
            margin="normal"
            value={newBlog.author}
            onChange={handleChange}
          />
          <Box textAlign="right" mt={2}>
            <Button variant="contained" color="primary" onClick={handleAddBlog}>
              Ekle
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Blog;