import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { AnimationTitle } from "./animation-title";
import type { Product } from "../../types";

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[210vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-4">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10">
      <AnimationTitle
        className="items-start! text-start"
        title={{
          preText: "Empowering Africa's\n",
          highlight: "Next Generation",
          postText: "\nof Leaders",
        }}
        titleClassName="md:text-7xl leading-[1.1]"
        descriptionClassName="text-base md:text-xl"
        description="Building skills, fostering hope, and creating lasting change that transforms young lives across Africa."
        highlightProps={{
          action: "highlight",
          padding: 10,
          animationDuration: 3000,
        }}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-xl overflow-hidden"
    >
      <a
        href={product?.link ?? "#"}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover absolute h-full w-full inset-0 group-hover/product:scale-105 transition-all duration-400"
          alt={product.title}
        />
      </a>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/50 to-transparent pt-10 p-4 group-hover/product:opacity-100 opacity-0 transition-all duration-600">
        <h2 className="text-white text-lg font-unbounded font-semibold translate-y-20 transition-all duration-600 group-hover/product:translate-y-0">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
