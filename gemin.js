import { GoogleGenerativeAI } from "@google/generative-ai";
import { promises as fs } from "fs"; // Correct import for fs.promises

const genAI = new GoogleGenerativeAI("AIzaSyBdxrcnGc8I9y_cgcpNFT-j7VK9Mo_QzSk");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function convertToGreenCode() {
  try {
    // Read the contents of 'one.cpp'
    const codeContent = await fs.readFile("one.cpp", "utf8");

    // Create the prompt with the code content
    const prompt = `Convert the following code to a green/optimized code and please only provide me the code no extra text:\n\n${codeContent}`;

    const result = await model.generateContent(prompt);

    try {
      await fs.writeFile("one.cpp", result.response.text());
      console.log(result.response.text());
    } catch (error) {
      console.error("Error writing to file:", error);
      process.exit(1); // Exit the process with a non-zero code to indicate failure
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

convertToGreenCode();
