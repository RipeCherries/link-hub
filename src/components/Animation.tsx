import { useState, useEffect, useRef } from "react";
import type { LottiePlayer } from "lottie-web";

interface AnimationProps {
    src: string;
    styles: string;
}

export default function Animation({ src, styles } : AnimationProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        import("lottie-web").then((Lottie) => {
            setLottie(Lottie.default);
        })
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: src
            });

            return () => animation.destroy();
        }
    }, [lottie]);

    return (
      <div ref={ref} className={styles}></div>
    );
}
