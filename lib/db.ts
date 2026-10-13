import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'db.json');

export function getDatabase() {
  try {
    if (!fs.existsSync(filePath)) {
      return { courses: [], lessons: [] };
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { courses: [], lessons: [] };
  }
}
// @ts-ignore
export function saveDatabase(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving database:', error);
  }
}
