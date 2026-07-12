import { useEffect, useState } from "react";

export const introSkipped = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MIN_SHOW = 2100; // full logo draw + fill
const LOAD_GRACE = 1800; // extra wait for window load before enabling entry

export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [ready, setReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / MIN_SHOW);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.min(99, Math.round(eased * 100)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = "hidden";

    const timers: number[] = [];
    const becomeReady = () => {
      setCount(100);
      setReady(true);
    };

    timers.push(
      window.setTimeout(() => {
        if (document.readyState === "complete") becomeReady();
        else {
          window.addEventListener("load", becomeReady, { once: true });
          timers.push(window.setTimeout(becomeReady, LOAD_GRACE));
        }
      }, MIN_SHOW),
    );

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", becomeReady);
      html.style.overflow = "";
    };
  }, []);

  const enter = () => {
    if (exiting) return;
    document.documentElement.style.overflow = "";
    setExiting(true);
    onDone();
    window.setTimeout(() => setGone(true), 700);
  };

  if (gone) return null;

  return (
    <div
      className={`intro${ready ? " is-ready" : ""}${exiting ? " is-exiting" : ""}`}
    >
      <div className="intro-logo" aria-hidden="true">
        <svg viewBox="0 0 68 52" width="118" height="90">
          <path
            className="intro-path"
            pathLength={1}
            transform="translate(17.4 0)"
            d="M10.5926 15.7795H0.000244141L21.6208 50.7821L49.5182 0H38.8387L21.0105 32.518L10.5926 15.7795Z"
          />
          <path
            className="intro-path intro-path-2"
            pathLength={1}
            transform="translate(0 1.3)"
            d="M7.2359 9.54628L0 0.0437116C6.36411 0.0437116 21.1933 0.0349937 29.5975 0.000121835C38.0016 -0.03475 43.4445 7.42491 45.1154 11.1591L40.059 20.2694L36.9205 15.0386C34.4446 10.3309 31.4718 9.21209 30.2949 9.24115L8.36924 9.11038L20.618 29.1617L15.4308 41.454H28.1154L33.6513 50.5207H0.217949C1.06068 48.6754 3.39128 43.8253 5.9718 39.1873C8.55231 34.5494 9.5171 29.6412 9.67693 27.7668C10.5836 19.4324 8.42736 12.1471 7.2359 9.54628Z"
          />
        </svg>
      </div>
      <button type="button" className="intro-btn" onClick={enter}>
        LOAD CHHUNSOUR
      </button>
      <div className="intro-count" aria-hidden="true">
        {count}
      </div>
    </div>
  );
};
