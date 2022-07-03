import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "zhent",
  api_key: "581823252649544",
  api_secret: "uzQta81NR-f_8vRzvZRDMRs0VF4"
})

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id)
}