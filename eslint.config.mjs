import { pathToFileURL, fileURLToPath } from "url";
import { dirname } from "path";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: pathToFileURL(__dirname).href,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
