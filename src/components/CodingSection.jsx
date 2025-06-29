// src/components/CodingSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import barPlot from '../images/bar_plot.png';
import linePlot from '../images/line_plot.png';
import cooperationPlot from '../images/cooperation_plot.png';

const snippets = {
  barPlot: `ggplot(monkey_data, aes(x = Monkey, y = MaskingAccuracy, fill = Monkey)) +\n  geom_boxplot(alpha = 0.7, color = "white", outlier.color = "white") +\n  labs(\n    title = "Sex, but Not Rank, Predicts Feature Masking Accuracy",\n    x = "Subject",\n    y = "Proportion of Correct Trials"\n  ) +\n  theme_minimal() +\n  theme(\n    panel.grid = element_blank(),\n    axis.line = element_line(color = "white"),\n    axis.ticks = element_line(color = "white"),\n    axis.text = element_text(color = "white"),\n    axis.title = element_text(color = "white"),\n    plot.title = element_text(color = "white", face = "bold"),\n    legend.position = "none",\n    panel.background = element_rect(fill = "transparent", color = NA),\n    plot.background = element_rect(fill = "transparent", color = NA)\n  )`,
  linePlot: `ggplot(data, aes(x = HoursWorked, y = ProductivityScore, color = Department)) +\n  geom_point(alpha = 0.7) +\n  geom_smooth(method = "lm", se = TRUE, linetype = "dashed") +\n  labs(\n    title = "Equity Sensitivity Increased with Econ-Game but Varies by Partner",\n    x = "Sessions",\n    y = "Equity Score"\n  ) +\n  theme_minimal() +\n  theme(\n    panel.grid = element_blank(),\n    axis.line = element_line(color = "white"),\n    axis.ticks = element_line(color = "white"),\n    axis.text = element_text(color = "white"),\n    axis.title = element_text(color = "white"),\n    plot.title = element_text(color = "white", face = "bold"),\n    legend.text = element_text(color = "white"),\n    legend.title = element_text(color = "white"),\n    panel.background = element_rect(fill = "transparent", color = NA),\n    plot.background = element_rect(fill = "transparent", color = NA),\n    legend.background = element_rect(fill = "transparent", color = NA),\n    legend.box.background = element_rect(fill = "transparent", color = NA)\n  ) +\n  scale_x_continuous(expand = c(0, 0)) +\n  scale_y_continuous(expand = c(0, 0))`,
  cooperationPlot: `ggplot(summary_df, aes(x = PartnerRank, y = mean_coop, color = SubjectRank, group = SubjectRank)) +\n  geom_point(size = 3) +\n  geom_line(linewidth = 1) +\n  geom_errorbar(aes(ymin = mean_coop - se, ymax = mean_coop + se), width = 0.2, linewidth = 0.6) +\n  labs(\n    title = "Cooperation Varies by Rank Similarity",\n    x = "Partner Rank",\n    y = "Cooperation Score ± SE",\n    color = "Subject Rank"\n  ) +\n  theme_minimal() +\n  theme(\n    panel.grid = element_blank(),\n    axis.line = element_line(color = "white"),\n    axis.ticks = element_line(color = "white"),\n    axis.text = element_text(color = "white"),\n    axis.title = element_text(color = "white"),\n    plot.title = element_text(color = "white", face = "bold"),\n    legend.text = element_text(color = "white"),\n    legend.title = element_text(color = "white"),\n    panel.background = element_rect(fill = "transparent", color = NA),\n    plot.background = element_rect(fill = "transparent", color = NA)\n  )`
};

const logos = [
  { name: 'barPlot', src: barPlot },
  { name: 'linePlot', src: linePlot },
  { name: 'cooperationPlot', src: cooperationPlot }
];

const CodingSection = ({ isHovered }) => {
  const [current, setCurrent] = useState(0);
  const logoRef = useRef();
  const textRef = useRef();
  const intervalRef = useRef(null);

  const animateToNext = () => {
    const tl = gsap.timeline({
      onComplete: () => setCurrent((prev) => (prev + 1) % logos.length)
    });
    tl.to([logoRef.current, textRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  };

  const startAnimation = () => {
    if (intervalRef.current) return;
    animateToNext();
    intervalRef.current = setInterval(animateToNext, 6000);
  };

  const stopAnimation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (isHovered) startAnimation();
    else stopAnimation();
    return () => stopAnimation();
  }, [isHovered]);

  useEffect(() => {
    const code = snippets[logos[current].name];
    let index = 0;
    let timeout;

    const type = () => {
      if (textRef.current) {
        textRef.current.innerText = code.slice(0, index);
        if (index < code.length) {
          index++;
          timeout = setTimeout(type, 10);
        }
      }
    };

    gsap.set([logoRef.current, textRef.current], { opacity: 1 });
    textRef.current.innerText = '';
    type();

    return () => clearTimeout(timeout);
  }, [current]);

  const { name, src } = logos[current];

  return (
    <div className="relative opacity-65 w-full h-full flex items-center justify-center overflow-hidden select-none pointer-events-none blur-[1px]">
      <img
        ref={logoRef}
        src={src}
        alt={name}
        className="absolute bottom-4 right-4 w-70 md:w-90 z-20 transition-transform duration-500 opacity-70"
      />
      <div className="absolute inset-0 z-10 grid place-items-center font-mono text-white/60 opacity-40 pointer-events-none select-none blur-[1.5px]">
        <pre ref={textRef} className="whitespace-pre-wrap text-xs md:text-sm text-left w-11/12"></pre>
      </div>
    </div>
  );
};

export default CodingSection;
