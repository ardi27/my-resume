import { setExperience } from "@/lib/vercel_kv";

export async function GET() {
    await setExperience();

    return Response.json({
        success: true
    })
}