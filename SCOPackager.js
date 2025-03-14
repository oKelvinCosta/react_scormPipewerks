import scopackager from "simple-scorm-packager";
import path from "path";
import { fileURLToPath } from "url";

// Obtenha o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
// Obtenha o diretório atual
const __dirname = path.dirname(__filename);

// **🔴ATENÇÃO🔴**
// **Para cada curso altere estas variáveis**
const title = "Curso de Robótica";
const description = "Um curso feito por NEAD SESI";
const keywords = ["scorm 1.2", "curso"];
const typicalDuration = "PT0H5M0S";

const config = {
  version: "1.2",
  organization: "SESI",
  title: title,
  language: "en-US",
  masteryScore: 80,
  startingPage: "index.html",
  source: path.join(__dirname, "dist/build"), // Pasta para os arquivos SCORM
  package: {
    // version: process.env.npm_package_version,
    zip: false,
    author: "NEAD SESI",
    // name: __dirname,
    outputFolder: path.join(__dirname, "dist"), // Pasta para salvar o ZIP
    description: description,
    keywords: keywords,
    typicalDuration: typicalDuration,
    rights: `©${new Date().getFullYear()} SESI. All right reserved.`,
    vcard: {
      author: "NEAD SESI",
      org: "SESI",
      tel: "(000) 000-0000",
      address: "my address",
      mail: "my@email.com",
      url: "https://mydomain.com",
    },
  },
};

scopackager(config, function (msg) {
  console.log(msg);
  process.exit(0);
});
