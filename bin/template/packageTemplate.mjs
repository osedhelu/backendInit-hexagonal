export const packageTemplate = (name) => `
{
  "name": "${name}",
  "version": "1.0.0",
  "module": "./src/main.ts",
  "type": "module",
  "scripts": {
    "start:dev": "bun --watch run ./src/main.ts"
  },
  "devDependencies": {
    "@types/qrcode-terminal": "^0.12.2",
    "bun-types": "^1.0.14"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "@elysiajs/swagger": "^0.7.4",
    "elysia": "^0.7.29",
    "node-dependency-injection": "^3.1.0",
    "uuid": "^9.0.1",
  },
}

`