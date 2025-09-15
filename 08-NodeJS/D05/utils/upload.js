import multer from 'multer';

/* --- --- --- --- UPLOADER --- --- --- --- */
const storage = multer.diskStorage({            // storage configuration
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // console.log(file);

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    },
    fileFilter: () => {

    }
})
export const upload = multer({ storage: storage }) // uploader configuration
/* --- --- --- --- -------- --- --- --- --- */