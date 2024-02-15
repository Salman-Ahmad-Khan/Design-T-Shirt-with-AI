import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello there from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json' 
    });

    // Log the response for debugging
    // console.log('OpenAI Response:', response);

    const imageData = response.data?.[0];
    if (imageData && imageData.b64_json) {
        const image = imageData.b64_json;
        

        res.status(200).json({ photo: image });
    } else {
        console.error("Image data is undefined or in unexpected format.");
        res.status(500).json({ message: "Image data is undefined or in unexpected format." });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

export default router;
