import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file uploaded successfully
        console.log("file is uploaded cloudinary" + uploadResult.url);

        // remove file
        fs.unlinkSync(localFilePath);
        return uploadResult;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally file saved  temporary file as uploaded operation got failed
        return null;
    }
};

export { uploadOnCloudinary };
