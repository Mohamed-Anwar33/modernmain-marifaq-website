
import { useState, useEffect, useRef } from "react";
import { Building, Users, Award, CheckCircle } from "lucide-react";

const StatsSection = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    {
      id: 1,
      icon: <Building size={40} className="text-marafiq-500" />,
      value: 150,
      label: "مشروع منجز",
      prefix: "+",
      suffix: ""
    },
    {
      id: 2,
      icon: <Users size={40} className="text-marafiq-500" />,
      value: 50,
      label: "عميل راضٍ",
      prefix: "+",
      suffix: ""
    },
    {
      id: 3,
      icon: <CheckCircle size={40} className="text-marafiq-500" />,
      value: 10,
      label: "سنوات خبرة",
      prefix: "",
      suffix: "+"
    },
    {
      id: 4,
      icon: <Award size={40} className="text-marafiq-500" />,
      value: 25,
      label: "جائزة وشهادة",
      prefix: "",
      suffix: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const Counter = ({ target, started, prefix = "", suffix = "" }: { target: number; started: boolean; prefix?: string; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!started) return;

      const duration = 2000; // in milliseconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = target / totalFrames;

      let currentFrame = 0;
      let currentCount = 0;

      const counter = setInterval(() => {
        currentFrame++;
        currentCount += increment;
        setCount(Math.floor(currentCount));

        if (currentFrame === totalFrames) {
          clearInterval(counter);
          setCount(target);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }, [started, target]);

    return (
      <span>{prefix}{count}{suffix}</span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-marafiq-100 to-marafiq-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-8 rounded-lg shadow-md animated-card">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-marafiq-950 mb-2">
                {countersStarted ? (
                  <Counter target={stat.value} started={countersStarted} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  <span>{stat.prefix}0{stat.suffix}</span>
                )}
              </h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
