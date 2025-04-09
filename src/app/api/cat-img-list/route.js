import { getCats } from "@/lib/services/catApi";

export async function GET() {
  try {
    const cats = await getCats();
    return Response.json(cats);
  } catch (error) {
    return Response.json(
      { error: "고양이 데이터를 가져오는데 실패했습니다" },
      { status: 500 },
    );
  }
}
