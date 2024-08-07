import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Portfolio.css";
import galleryItemsData from "./galleryItems.json";
import categoriesData from "./categories.json";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  useEffect(() => {
    setGalleryItems(galleryItemsData);
    setCategories(categoriesData);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleVideoPlay = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setModalIsOpen(true);
  };

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedSubcategory) return item.subcategory === selectedSubcategory;
    return item.category === selectedCategory;
  });

  return (
    <div className="filter_gallery">
      <div className="category-buttons">
        <div className="category_title">
          <h3>Our Portfolio</h3>
          <h2>Some recent work</h2>
        </div>
        <div className="option_btn">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {selectedCategory !== "All" && categories[selectedCategory].length > 0 && (
        <div className="subcategory-buttons">
          {categories[selectedCategory].map((subcategory) => (
            <button
              key={subcategory}
              className={`button ${selectedSubcategory === subcategory ? "active" : ""}`}
              onClick={() => handleSubcategoryChange(subcategory)}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}
      <div className="gallery">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <LazyLoadImage
              src={item.image}
              alt={item.subcategory}
              className="gallery-image"
              effect="blur"
            />
            {item.category === "Video" && (
              <button className="play-button" onClick={() => handleVideoPlay(item.videoUrl)}>
                ▶
              </button>
            )}
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Modal"
        className="video-modal"
        overlayClassName="video-overlay"
      >
        <button className="close-button" onClick={() => setModalIsOpen(false)}>X</button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={currentVideoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
