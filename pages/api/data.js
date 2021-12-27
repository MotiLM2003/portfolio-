import { images } from './images';
export default async function (req, res) {
  res.json(images);
}
