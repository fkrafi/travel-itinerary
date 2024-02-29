import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyBkyd74LZBZmCx1Gomz9UiTRkKfpI7XU9w';

const genAI = new GoogleGenerativeAI(process.env.API_KEY ?? API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

export default function query(prompt: string) {
    return model.generateContent(prompt)
        .then(result => result.response)
        .then(resp => resp.text())
}