import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    // 👇ここでルールを上書き
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
