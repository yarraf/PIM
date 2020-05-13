import {takeLatest,put} from 'redux-saga/effects';
import {GET_ARTICLE_INFO,
        FETCHED_ARTICLE_INFO,
        GET_TAGS_ARTICLE,
        FETCHED_ARTICLE_TAGS} from '../actions/types';

function* getProductInfoWorker(action){
    console.log("***** SAGA: getProductInfo ******")
    const selectArtResponse={data:{"BARNEGATIVE":77,"BARPOSITIVE":0,"EAN":3123654789652, "STATUSAPPRO":"G", "SUPPLIER":"Britabe","CODIC":8265550,"CREATIONDATE":"02/04/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"PC PORTABLE","FNACSKU":"","MARQUE":"ALCATEL","NAMECP":"TESTRESCOM","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeSOhYD8k","VISIBILTYINFOFNAC":"hidden"}};
     console.log("getarticlebycodic"+action.article);
     try{
         if(action.article != ""){
             yield put({type:FETCHED_ARTICLE_INFO,payload:selectArtResponse});
         }

     }catch(error){
        console.log("***** ERROR SAGA: getProductInfo ******")
     }
}

function* getArticleTags(){
 //For testing:
 const tagsResponse = {data:[{ID:1,NAME:"TV"},{ID:2,NAME:"RADIO"}]}
 yield put({type:FETCHED_ARTICLE_TAGS,payload:tagsResponse})
}

export function* productInfoWatcher(){
    yield takeLatest(GET_ARTICLE_INFO,getProductInfoWorker);
}

export function* productTagsWatcher(){
    yield takeLatest(GET_TAGS_ARTICLE,getArticleTags);
}