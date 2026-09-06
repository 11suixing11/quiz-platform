import type { Metadata } from "next";
import { CommunityStream } from "@/components/community/community-stream";

export const metadata: Metadata = {
  title: { absolute: "认识你自己 | Know Yourself" },
  description: "一个安静的社区：用文字、测评或图像分享你的观察，把此刻留给可能懂你的人。 A calm community to share your observations in words, assessments, or images.",
};

export default function HomePage() {
  return <CommunityStream />;
}
