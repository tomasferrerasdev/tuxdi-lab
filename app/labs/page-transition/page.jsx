"use client";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ImageGrid } from "@/app/components/ImageGrid/ImageGrid";

const pageTransition = () => {
  const router = useRouter();
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => router.push("/labs/page-transition/ford"),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return <ImageGrid timeline={timeline} />;
};

export default pageTransition;
