import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HindiPage from "@/components/HindiPage";
import { HINDI_PAGES } from "@/lib/hindi-site";
import { hindiMetadata } from "@/lib/hindi-metadata";

export function generateStaticParams() {
  return [{ lang: "hi" }];
}

type HindiHomeProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: HindiHomeProps): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "hi") notFound();
  return hindiMetadata(HINDI_PAGES["/"]);
}

export default async function HindiHomePage({ params }: HindiHomeProps) {
  const { lang } = await params;
  if (lang !== "hi") notFound();
  return <HindiPage page={HINDI_PAGES["/"]} />;
}
