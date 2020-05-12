import {takeLatest, put} from 'redux-saga/effects';

import {FETCHED_ARTICLES,FETCHED_GET_ONE_ARTICLE,GET_ARTICLES,GET_ARTICLE_BY_CODIC} from '../actions/types';

function* getUserArticlesWorker(action){
    try{
        console.log("fetching data");
        
        //TODO CALL API
        //For testing
        const artResponse= {
            data:[{"BARNEGATIVE":77,"BARPOSITIVE":0,"CODIC":8265550,"CREATIONDATE":"02/04/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"PC PORTABLE","FNACSKU":"","MARQUE":"ALCATEL","NAMECP":"TESTRESCOM","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeSOhYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":66,"BARPOSITIVE":0,"CODIC":8265569,"CREATIONDATE":"02/04/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"Laptop MAC","FNACSKU":"","MARQUE":"APPLE","NAMECP":"TESTBTOBDROPSHIPMENT","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeeQhYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":19,"BARPOSITIVE":0,"CODIC":8265577,"CREATIONDATE":"27/03/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"Batterie divers","FNACSKU":"","MARQUE":"DURACELL","NAMECP":"TESTEFFBTOB","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe.QhYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":79,"BARPOSITIVE":0,"CODIC":8265585,"CREATIONDATE":"06/05/2019","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"Compacts Ã  objectif interchangeable","FNACSKU":"","MARQUE":"SONY","NAMECP":"ALPHA 7 III ILCE7M3B *COPY*","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeeRhYD8k","VISIBILTYINFOFNAC":""},
            {"BARNEGATIVE":15,"BARPOSITIVE":0,"CODIC":8265593,"CREATIONDATE":"09/03/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"CONNECTION PC","FNACSKU":"","MARQUE":"BELKIN","NAMECP":"Test julie BtoB","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe.RhYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":57,"BARPOSITIVE":0,"CODIC":8265607,"CREATIONDATE":"28/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"2K","NAMECP":"TestGooglePlayPOSA50","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe2ShYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":56,"BARPOSITIVE":1,"CODIC":8265615,"CREATIONDATE":"28/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"505 Games","NAMECP":"TestGooglePlayPOSA25","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeWShYD8k","VISIBILTYINFOFNAC":""},
            {"BARNEGATIVE":0,"BARPOSITIVE":0,"CODIC":8265623,"CREATIONDATE":"28/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"505 Games","NAMECP":"TestGooglePlayPOSA15","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe2ThYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":0,"BARPOSITIVE":0,"CODIC":8265631,"CREATIONDATE":"27/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"505 Games","NAMECP":"TestKoboPOSA10","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeWThYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":0,"BARPOSITIVE":0,"CODIC":8265658,"CREATIONDATE":"27/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"505 Games","NAMECP":"TestKoboPOSA25","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeCVhYD8k","VISIBILTYINFOFNAC":"hidden"},
            {"BARNEGATIVE":0,"BARPOSITIVE":0,"CODIC":8265666,"CREATIONDATE":"27/02/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"POSA Multi-purpose","FNACSKU":"","MARQUE":"505 Games","NAMECP":"TestKoboPosa50","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeiWhYD8k","VISIBILTYINFOFNAC":"hidden"}]
    };

    if (artResponse.data){      
        yield put({type:FETCHED_ARTICLES, payload:artResponse});        
    }

    }
    catch (error) {
       /* yield put({
          type: ERROR_OCCUR,
          payload: { message: "Something went wrong. Please try again later" }
        });*/
    }
}
 function* getArticleWorker(action){
     const selectArtResponse={data:{"BARNEGATIVE":77,"BARPOSITIVE":0,"CODIC":8265550,"CREATIONDATE":"02/04/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"PC PORTABLE","FNACSKU":"","MARQUE":"ALCATEL","NAMECP":"TESTRESCOM","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeSOhYD8k","VISIBILTYINFOFNAC":"hidden"}};
     console.log("getarticlebycodic"+action.article);
     try{
         if(action.article != ""){
             yield put({type:FETCHED_GET_ONE_ARTICLE,payload:selectArtResponse});
         }

     }catch(error){
         //TODO
     }
 }

export function* UserArticlesWatcher(){
    yield takeLatest(GET_ARTICLES, getUserArticlesWorker);
}

export function* GetOneArticleByCodicWatcher(){
    yield takeLatest(GET_ARTICLE_BY_CODIC, getArticleWorker);

}