import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)

// Base file name
console.log(__filename);

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(path.dirname(__filename), 'test', 'hello.html'));