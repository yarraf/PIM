import {all} from 'redux-saga/effects';

import {UserArticlesWatcher,GetOneArticleByCodicWatcher} from './userArticlesSaga';
import {productInfoWatcher,productTagsWatcher,productAttrWatcher} from './productActionSaga';
export default function* rootSaga(){
    yield all([UserArticlesWatcher(),
        GetOneArticleByCodicWatcher(),
        productInfoWatcher(),
        productTagsWatcher(),
        productAttrWatcher()]);
}