import { combineReducers } from 'redux';
import BookDetails from './BookReducer';

const rootReducer = combineReducers({
    BookDetails: BookDetails
});

export default rootReducer;