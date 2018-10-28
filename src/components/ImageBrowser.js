import React from "react";

export class ImageBrowser extends React.Component {
  render() {
    const {images} = this.props;

    return (
      <div className="row mt-4 mb-4">
        Nothing here yet!
        {
          images.map(image => {
            return (
              <div key={image.id} className="col-md-6 col-lg-4">
                <div className="mt-2 mb-2">
                  <img src={`http://localhost:8000${image.url}`}
                       className="img-fluid" />
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
