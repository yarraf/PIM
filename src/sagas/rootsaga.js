import {all} from 'redux-saga/effects';

import {UserArticlesWatcher,GetOneArticleByCodicWatcher} from './userArticlesSaga';

export default function* rootSaga(){
    yield all([UserArticlesWatcher(),GetOneArticleByCodicWatcher()]);
}