import axios from "axios";

// Example using Google Cloud Translation API
export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${
        import.meta.env.VITE_GOOGLE_CLOUD_API_KEY
      }`,
      {
        q: text,
        target: targetLanguage,
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};

// Alternative using Azure Translator
export const translateWithAzure = async (text, targetLanguage) => {
  const endpoint = process.env.AZURE_TRANSLATOR_ENDPOINT;
  const key = process.env.AZURE_TRANSLATOR_KEY;

  try {
    const response = await axios.post(
      `${endpoint}/translate?api-version=3.0&to=${targetLanguage}`,
      [{ text }],
      {
        headers: {
          "Ocp-Apim-Subscription-Key": key,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Translation error:", error);
    throw error;
  }
};
