import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Konfigurasi agar __dirname bisa berjalan di format ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Memberitahu Express untuk menggunakan file statis di folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk menyajikan halaman index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route /about untuk menyajikan data JSON biodata Anda
app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Septia Wahyuni',
            nim: '2311011027',
            ttl: 'Sibolga, 11 September 2004',
            kampus: 'Politeknik Negeri Padang',
            jurusan: 'Teknik Elektro',
            prodi: 'DIV Teknik Elektronika Industri',
            organisasi: 'Cybertech Politeknik Negeri Padang',
            jabatan: 'Staff Ahli bidang CIM'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
