const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const BASE_URL = 'https://api.mymemory.translated.net/get';

app.post('/api/translate', async (req, res) => {
    const { text, sourceLang, targetLang } = req.body;

    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Missing text or language parameters' });
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: { q: text, langpair: `${sourceLang}|${targetLang}` }
        });

        res.json({ translatedText: response.data.responseData.translatedText });
    } catch (error) {
        console.error("Translation error:", error);
        res.status(500).json({ error: 'Failed to translate text' });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Translator API running on port ${PORT}`));
