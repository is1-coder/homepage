import React from "react";

type AboutCardProps = {
  title: string;
  description: string;
};

const AboutCard = ({ title, description }: AboutCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
