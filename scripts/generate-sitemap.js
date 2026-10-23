import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateDynamicSitemapXml } from '../src/data/keywords.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

const xml = generateDynamicSitemapXml();
fs.writeFileSync(sitemapPath, xml, 'utf8');

const count = (xml.match(/<loc>/g) || []).length;
console.log(`[dynamic-sitemap] Generated public/sitemap.xml with ${count} URLs.`);
