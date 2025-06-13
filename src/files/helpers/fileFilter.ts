export default function fileFilter(
  req: Express.Request,
  file: Express.Multer.File,
  cb: Function,
) {
  if (!file) {
    return cb(new Error('No file was uploaded'), false);
  }

  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
