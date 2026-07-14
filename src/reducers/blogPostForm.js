import {
  BLOG_POST_FORM_UNLOAD, IMAGE_DELETE_REQUEST, IMAGE_DELETED,
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOADED
} from "../actions/constants";

export default (state = {
  imageReqInProgress: false,
  images: []
}, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_REQUEST:
    case IMAGE_DELETE_REQUEST:
      return {
        ...state,
        imageReqInProgress: true
      };
    case IMAGE_UPLOADED:
      return {
        ...state,
        imageReqInProgress: false,
        images: state.images.concat(action.image)
      };
    case IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        imageReqInProgress: false
      };
    case BLOG_POST_FORM_UNLOAD:
      return {
        ...state,
        imageReqInProgress: false,
        images: []
      };
    case IMAGE_DELETED:
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.imageId),
        imageReqInProgress: false
      };
    case 'IMAGE_UPLOAD_PROGRESS':
      console.log(action.percent);
      return {
        ...state,
      };
    default:
      return state;
  }
}
