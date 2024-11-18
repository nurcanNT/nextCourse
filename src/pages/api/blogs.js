import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { id } = req.query;

  // blogs.json dosyasını okuma
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const blogs = JSON.parse(fileContents);

  if (id) {
    // Belirli bir makale için ID'ye göre filtreleme
    const blog = blogs.find((blog) => blog.id === id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Makale bulunamadı' });
    }
  } else {
    // Tüm makaleleri döndür
    res.status(200).json(blogs);
  }
}
