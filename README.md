# Word Encryption & Decryption App

A simple and interactive web application to encrypt and decrypt text using various methods — built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.


## Features

- Encrypt plain text using different techniques (e.g., Base64)
-  Decrypt previously encrypted messages
- clean and modern user interface with Tailwind CSS
-  Fast development and build time using Vite


## Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | Frontend library |
| TypeScript | Type safety |
| Vite       | Build tool |
| Tailwind CSS | Styling |
| Node.js + npm | Project setup |


# Code
## index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Word Encryption and Decryption Tool</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

##paackage.json
```
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```
##tsnode.json
```
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```
##output

<img width="1050" height="718" alt="image" src="https://github.com/user-attachments/assets/0a92bd9d-628a-48f2-97a9-878aef34b774" />

<img width="1042" height="712" alt="image" src="https://github.com/user-attachments/assets/2736829f-6219-43e5-8cb4-fef48f326a55" />










