import { NextResponse } from "next/server";

/** フォーム用環境変数がサーバーで読めているか確認（値は返さない） */
export async function GET() {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_FORMSPREE_KEY?.trim()
  );
  return NextResponse.json({ formConfigured: configured });
}
