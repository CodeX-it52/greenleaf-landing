export function useScroll(el: Element) {
    const smoothScrollTo = (targetPosition: number, duration: number) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const scrollAnimation = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollProgress = Math.min(timeElapsed / duration, 1);
            const easedProgress = scrollProgress < 0.5 ? 2 * scrollProgress * scrollProgress : -1 + (4 - 2 * scrollProgress) * scrollProgress;

            window.scroll({
                top: startPosition + distance * easedProgress,
                behavior: "smooth"
            });
            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }

    const y = el.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(y, 300)
}