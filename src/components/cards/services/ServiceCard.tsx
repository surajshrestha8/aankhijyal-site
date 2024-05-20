import { BsGlobe } from "react-icons/bs";
import "./ServiceCard.css";

export interface ServiceCardProps {
  title?: string;
  content?: string;
  icon?: any;
}

const ServiceCard = ({ title, content }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <BsGlobe className="service-icon" size={60} />

      <h3 style={{ fontSize: "19px", fontFamily: "sans-serif" }}>{title}</h3>
      <p style={{ fontFamily: "sans-serif", fontSize: '18px' }}>{content}</p>
    </div>
  );
};

export default ServiceCard;
