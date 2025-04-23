
### **README.md**
```md
# Translator API 🚀
A simple **Translator API** created by **Ayanfe** using **MyMemory Translation API**.

## Features
✅ **No API key required**  
✅ **Supports multiple languages**  
✅ **Easy to use and lightweight**

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/ayanfe/translator-api.git
   ```
2. Navigate into the directory:
   ```bash
   cd translator-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### **Start the API Server**
```bash
npm start
```
Or for development mode (auto-restarts):
```bash
npm run dev
```

### **API Endpoint**
**POST `/api/translate`**  
_Translates text from one language to another._

#### **Request Body**
```json
{
  "text": "Hello",
  "sourceLang": "en",
  "targetLang": "fr"
}
```

#### **Response**
```json
{
  "translatedText": "Bonjour"
}
```

## Technologies Used
- Node.js
- Express.js
- Axios
- MyMemory Translation API

## Contributing
Feel free to fork, modify, and submit pull requests to improve this API.

## License
This project is open-source under the **MIT License**.

