import {all} from 'redux-saga/effects';

import {UserArticlesWatcher} from './userArticlesSaga';

export default function* rootSaga(){
    yield all([UserArticlesWatcher()]);
}