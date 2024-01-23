import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0/appHBgV8KCoqcryWu";
const TOKEN =
  "patbOoitoFRwwRPkZ.60487b09a6d89b41d77926048fdfbeb4910fd66d559440fbf1b3d91d40d1a8fb";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});
