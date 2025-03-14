import { src, dest, series } from "gulp";
import zipGulp from "gulp-zip";
import path from "path";

import { deleteAsync } from "del";

// Function to delete everything inside the "dist" folder
export function clean() {
  return deleteAsync(["dist/**"]);
}

// Function to get the current date in dd-mm-yyyy format
function getCurrentDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

// Task to create the ZIP of the dist folder
export function zip() {
  const dirname = path.basename(path.resolve());
  // Name of the generated ZIP file
  const zipFileName = `${dirname}_${getCurrentDate()}_SCORM-PKG.zip`;
  return src("dist/build/**/*", { encoding: false }) // Get all files inside dist, encoding: false to not corrupt the images
    .pipe(zipGulp(zipFileName)) // Create the ZIP with the defined name
    .pipe(dest("dist/")); // Save the ZIP in the project root
}

// To use in package.json
export const beforeBuild = series(clean);
export const afterBuild = series(zip);

// Default task to automatically create the ZIP after the build
export default series(zip);
