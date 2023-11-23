import { Gallery } from "./Components/Gallery";

function App() {

  return (
    <>
      <Gallery 
      photos={[
        {id: 1, src: "./react_gallery/photos/1.jpg", preview: "./react_gallery/photos/preview/1.jpg", description: "photo 1"},
        {id: 2, src: "./react_gallery/photos/2.jpg", preview: "./react_gallery/photos/preview/2.jpg", description: "photo 2"},
        {id: 3, src: "./react_gallery/photos/3.jpg", preview: "./react_gallery/photos/preview/3.jpg", description: "photo 3"},
        {id: 4, src: "./react_gallery/photos/4.jpg", preview: "./react_gallery/photos/preview/4.jpg", description: "photo 4"},
        {id: 5, src: "./react_gallery/photos/5.jpg", preview: "./react_gallery/photos/preview/5.jpg", description: "photo 5"},
        {id: 6, src: "./react_gallery/photos/6.jpg", preview: "./react_gallery/photos/preview/6.jpg", description: "photo 6"},
        {id: 7, src: "./react_gallery/photos/7.jpg", preview: "./react_gallery/photos/preview/7.jpg", description: "photo 7"},
      ]} />
    </>
  )
}

export default App;
