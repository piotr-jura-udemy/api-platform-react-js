import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export class ImageBrowser extends React.Component {
  render() {
    const {images, deleteHandler, isLocked} = this.props;

    return (
      <div className="row mt-4 mb-4">
        <TransitionGroup component={null}>
          {
            images.map(image => {
              const onImageDeleteClick = (event) => {
                event.preventDefault();
                deleteHandler(image.id);
              };
              return (
                <CSSTransition timeout={1000} classNames="fade" key={image.id}>
                  <div className="col-md-6 col-lg-4">
                    <div className="mt-2 mb-2">
                      <img src={`http://localhost:8000${image.url}`} alt={image.id}
                           className="img-fluid"/>
                    </div>
                    <div className="mb-2">
                      <button type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={onImageDeleteClick}
                              disabled={isLocked}>Remove</button>
                    </div>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
      </div>
    )
  }
}
