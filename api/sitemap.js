import { generateDynamicSitemapXml } from '../src/data/keywords.ts';

export default function handler(req, res) {
  try {
    const xml = generateDynamicSitemapXml();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200');
    return res.status(200).send(xml);
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    return res.status(500).send('Internal Server Error generating dynamic sitemap');
  }
}
