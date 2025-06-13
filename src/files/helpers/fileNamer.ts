export default function fileNamer(
  req: Express.Request,
  file: Express.Multer.File,
  cb: Function,
) {
  if (!file) return cb(new Error('No file was uploaded'), false);

  const fileType = file.mimetype.split('/')[1];

  const fileName = file.originalname.replace(/\s/g, '_');

  cb(null, fileName.replace(/\./g, `.${fileType}`));
}
