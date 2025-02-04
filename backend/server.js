import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { HfInference } from "@huggingface/inference";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Hugging Face client
const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

// Add route for image generation
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const image = await hf.textToImage({
            model: "black-forest-labs/FLUX.1-dev",
            inputs: prompt,
            parameters: { num_inference_steps: 5 },
            provider: "replicate",
        });

        // Convert blob to base64
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        res.json({ 
            image: `data:image/jpeg;base64,${base64Image}`
        });

    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});