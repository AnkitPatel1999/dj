import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      max_results: 100,
    });

    return NextResponse.json({
      images: result.resources.map((image) => ({
        publicId: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      })),
      nextCursor: result.next_cursor || null,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}