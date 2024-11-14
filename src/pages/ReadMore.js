import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

const ReadMore = ({ article, similarArticles }) => {
  if (!article) {
    // Eğer article null veya undefined ise yedek içerik göster
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Makale Bulunamadı</Typography>
        <Typography variant="body1">Üzgünüz, istediğiniz makale bulunamadı.</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {/* Ana Makale İçeriği */}
      <Grid item xs={12} md={8}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {article.content}
          </Typography>
        </Box>
      </Grid>

      {/* Benzer Makaleler Yan Menü */}
      <Grid item xs={12} md={4}>
        <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            Benzer Makaleler
          </Typography>
          <List>
            {similarArticles.map((similarArticle) => (
              <ListItem key={similarArticle.id} button component="a" href={`/ReadMore?id=${similarArticle.id}`}>
                <ListItemText primary={similarArticle.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const articleResponse = await fetch(`https://api.example.com/articles/${id}`);
    const article = await articleResponse.json();

    if (!article) {
      return { props: { article: null, similarArticles: [] } };
    }

    // Benzer makaleler örnek verisi
    const similarArticles = [
      { id: '2', title: 'Ev Dekorasyonunda Renk Seçimi' },
      { id: '3', title: 'Minimalist Mobilya Tasarımının İncelikleri' }
    ];

    return { props: { article, similarArticles } };
  } catch (error) {
    console.error("Veri çekme işlemi başarısız:", error);
    return { props: { article: null, similarArticles: [] } };
  }
}

export default ReadMore;
