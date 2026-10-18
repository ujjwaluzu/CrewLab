import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HindiPage from "@/components/HindiPage";
import { HINDI_PAGES, HINDI_PATHS } from "@/lib/hindi-site";
import { hindiMetadata } from "@/lib/hindi-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return HINDI_PATHS.filter((path) => path !== "/").map((path) => ({
    lang: "hi",
    slug: path.slice(1).split("/"),
  }));
}

async function resolvePage(params: Promise<{ lang: string; slug: string[] }>) {
  const { lang, slug } = await params;
  if (lang !== "hi") notFound();
  const page = HINDI_PAGES["/" + slug.join("/")];
  if (!page) notFound();
  return page;
}

type HindiContentProps = { params: Promise<{ lang: string; slug: string[] }> };

export async function generateMetadata({ params }: HindiContentProps): Promise<Metadata> {
  return hindiMetadata(await resolvePage(params));
}

export default async function HindiContentRoute({ params }: HindiContentProps) {
  return <HindiPage page={await resolvePage(params)} />;
}
