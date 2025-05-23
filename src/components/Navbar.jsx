import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/menu1.jpg",
    "/images/menu2.jpg",
   
  ]; // Replace with your image paths

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);
  const openImage = (img) => setSelectedImage(img);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left" onClick={() => navigate("/")}>
          <strong className="logo-glow">Hi Broast</strong>
        </div>

        <div className="navbar-right">
          <button
            className="icon-button menu-button"
            onClick={openGallery}
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
          <button
            className="icon-button"
            onClick={() => navigate("/menu")}
            aria-label="Menu"
          >
            <span className="menu-text">Menu</span>
          </button>
        </div>
      </nav>

      {isGalleryOpen && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={'Gallery ${index + 1}'}
                className="gallery-image"
                onClick={() => openImage(img)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="image-fullscreen" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
        </div>
      )}
    </>
  );
};

export default Navbar;