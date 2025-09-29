import React from "react";

interface OpenGraphImageProps {
  title: string;
  description: string;
  logo?: string;
  backgroundImage?: string;
  width?: number;
  height?: number;
}

export const OpenGraphImage: React.FC<OpenGraphImageProps> = ({
  title,
  description,
  logo = "/logo/logo-words.png",
  backgroundImage = "/images/_DSC3090.webp",
  width = 1200,
  height = 630,
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(rgba(21, 92, 57, 0.8), rgba(21, 92, 57, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "white",
        position: "relative",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "40px" }}>
        <img
          src={logo}
          alt="Reach Afrika Logo"
          style={{
            height: "80px",
            width: "auto",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0 0 20px 0",
          lineHeight: "1.2",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        {title}
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          margin: "0",
          lineHeight: "1.4",
          maxWidth: "800px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {description}
      </p>

      {/* Bottom accent */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "8px",
          background: "linear-gradient(90deg, #f68116, #155c39)",
        }}
      />
    </div>
  );
};

// Component for generating OG images programmatically
export const generateOGImage = (props: OpenGraphImageProps): string => {
  // This would typically be used with a service like Vercel's @vercel/og
  // or a similar service to generate images at build time
  const { title, description, logo, backgroundImage } = props;

  // For now, return a placeholder URL
  // In production, you'd generate this image server-side
  return `https://reachafrika.org/api/og?title=${encodeURIComponent(
    title
  )}&description=${encodeURIComponent(description)}&logo=${encodeURIComponent(
    logo || ""
  )}&bg=${encodeURIComponent(backgroundImage || "")}`;
};
