import { promises as fs } from "fs";
import axios from "axios";
const url = "https://b3b2-35-196-20-225.ngrok-free.app/optimize";

async function convertToGreenCode() {
  try {
    const codeContent1 = await fs.readFile("one.py", "utf8");
    const codeContent2 = await fs.readFile("two.py", "utf8");

    const response = await axios.post(`${url}`, {
      code: codeContent1,
    });
    const response2 = await axios.post(`${url}`, {
      code: codeContent2,
    });

    const optimizedCode = response.data.optimized_code;
    const optimizedCode2 = response2.data.optimized_code;
    console.log(response.data.optimized_code);

    await fs.writeFile("one.py", optimizedCode, "utf8");
    await fs.writeFile("two.py", optimizedCode2, "utf8");

    console.log("Optimized code written to one.cpp");
  } catch (error) {
    console.error("Error during optimization:", error);
    process.exit(1);
  }
}

convertToGreenCode();
