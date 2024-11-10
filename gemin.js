import { promises as fs } from "fs";
import axios from "axios";

async function convertToGreenCode() {
  try {
    const codeContent = await fs.readFile("one.py", "utf8");

    const prompt = `${codeContent}`;

    const response = await axios.post(
      "https://eb9f-104-199-133-146.ngrok-free.app/optimize",
      {
        code: prompt,
      }
    );

    const optimizedCode = response.data.optimized_code;
    console.log(response.data.optimized_code);

    await fs.writeFile("one.py", optimizedCode, "utf8");
    console.log("Optimized code written to one.cpp");
  } catch (error) {
    console.error("Error during optimization:", error);
    process.exit(1);
  }
}

convertToGreenCode();
