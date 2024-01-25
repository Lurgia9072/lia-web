import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {

  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const detectarTipoContenido = () => {
      // Verificar si la URL termina con una extensión de video (por ejemplo, .mp4)
      return imgUrl && /\.(mp4|webm|ogg)$/i.test(imgUrl);
    };

    setIsVideo(detectarTipoContenido());
  }, [imgUrl]);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="">
        {isVideo ? (
          <video src={imgUrl} autoPlay muted loop width="100%"/>
        ) : (
          <img src={imgUrl} alt="Project Image" />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
