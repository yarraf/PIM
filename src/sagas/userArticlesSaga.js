import {takeLatest, put} from 'redux-saga/effects';

import {FETCHED_ARTICLES,GET_ARTICLES} from '../actions/types';

function* getUserArticlesWorker(action){
    try{
        console.log("fetching data");
        const artResponse= {
            data:[{
            "BARNEGATIVE": 77,
            "BARPOSITIVE": 0,
            "CODIC": 8265550,
            "CREATIONDATE": "02/04/2020",
            "DISPLAYPROGRESSATTRIBUTE": "",
            "FAMILY": "PC PORTABLE",
            "FNACSKU": "",
            "MARQUE": "ALCATEL",
            "NAMECP": "TESTRESCOM",
            "URL": "/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeSOhYD8k",
            "VISIBILTYINFOFNAC": "hidden"
        }]
    };

    if (artResponse.data){
        if (action.query){
            yield put({type:FETCHED_ARTICLES, payload:artResponse});
        }
    }

    }
    catch (error) {
       /* yield put({
          type: ERROR_OCCUR,
          payload: { message: "Something went wrong. Please try again later" }
        });*/
    }
}


export function* UserArticlesWatcher(){
    yield takeLatest(GET_ARTICLES, getUserArticlesWorker);
}