// GeminiAPI.js

import axios from "axios";

const API_URL = "https://api.gemini.com";

const fetchAccountBalances = async (apiKey, apiSecret) => {
  try {
    const response = await axios.get(`${API_URL}/v1/balances`, {
      headers: {
        "Content-Type": "text/plain",
        "X-GEMINI-APIKEY": apiKey,
        "X-GEMINI-PAYLOAD": "",
        "X-GEMINI-SIGNATURE": "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching account balances:", error);
    throw error;
  }
};

export { fetchAccountBalances };
