import {
  BLOG_POST_FORM_UNLOAD, IMAGE_DELETED,
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOADED
} from "../actions/constants";

export default (state = {
  isImageUploading: false,
  images: []
}, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
      return {
        ...state,
        isImageUploading: true
      };
    case IMAGE_UPLOADED:
      return {
        ...state,
        isImageUploading: false,
        images: state.images.concat(action.image)
      };
    case IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        isImageUploading: false
      };
    case BLOG_POST_FORM_UNLOAD:
      return {
        ...state,
        isImageUploading: false,
        images: []
      };
    case IMAGE_DELETED:
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.imageId)
      };
    default:
      return state;
  }
}
