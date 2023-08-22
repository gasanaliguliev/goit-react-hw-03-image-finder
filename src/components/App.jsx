import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import './styles.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    selectedImage: null,
    totalHits: 0,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    const apiKey = '38971521-301f5cb08025e3967497dc80d';
    axios
      .get(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=12`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          totalHits: response.data.totalHits,
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, images: [], page: 1 });
  };

  handleImageClick = (selectedImage) => {
    this.setState({ selectedImage, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null, showModal: false });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, totalHits } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onItemClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && totalHits > images.length && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;


