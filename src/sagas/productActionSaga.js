import {takeLatest,put} from 'redux-saga/effects';
import {GET_ARTICLE_INFO,
        FETCHED_ARTICLE_INFO,
        GET_TAGS_ARTICLE,
        FETCHED_ARTICLE_TAGS,
        GET_ATTR_ARTICLE,
        FETCHED_ARTICLE_ATTR} from '../actions/types';

function* getProductInfoWorker(action){
    console.log("***** SAGA: getProductInfo ******")
    const selectArtResponse={data:{"BARNEGATIVE":77,"BARPOSITIVE":0,"CODIC":8265550,"CREATIONDATE":"02/04/2020","DISPLAYPROGRESSATTRIBUTE":"","FAMILY":"PC PORTABLE","FNACSKU":"","MARQUE":"ALCATEL","NAMECP":"TESTRESCOM","URL":"/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeSOhYD8k","VISIBILTYINFOFNAC":"hidden"}};
     console.log("getarticlebycodic"+action.article);
     try{
         if(action.article !== ""){
             yield put({type:FETCHED_ARTICLE_INFO,payload:selectArtResponse});
         }

     }catch(error){
        console.log("***** ERROR SAGA: getProductInfo ******")
     }
}

function* getArticleTags(){
 
 const tagsResponse  = {data:[{ID:1,NAME:"TV"},{ID:2,NAME:"RADIO"}]}
 yield put({type:FETCHED_ARTICLE_TAGS,payload:tagsResponse ,FETCHED_ARTICLE_ATTR })
}

function* getArticleAttr(){
 
    const AttrResponse = {data:[{"ATTRIBUTES":[{
        "ATTRCALCULATED":[
            {"ASSET":"Ajouter atout","ATTRHASVALUE":0,"ATTRIBUTEID":236,"ATTRIBUTENAME":"Connex. vidÃ©o(CALC)","CALCULATEDVALUE":"","LASTCALCULATEDVALUE":"NULL","SEQUENCE":90181,"TYPEATTRIBUTE":3
        }],
            
        "ATTRFREETEXT":[
            {"ASSET":"Ajouter atout","ATTRHASVALUE":0,"ATTRIBUTEID":526,"ATTRIBUTENAME":"Optimisation d'image","FREETEXTFR":"","FREETEXTNL":"","LASTTEXTFR":"NULL","LASTTEXTNL":"NULL","SEQUENCE":73,"TYPEATTRIBUTE":2
        }],
            
        "ATTRPREDEFINIT":[
            {"ASSET":"Ajouter atout","ATTRHASVALUE":0,"ATTRIBUTEID":2,"ATTRIBUTENAME":"3D","BLOCLEXICON":[{"LEXICON":"Instructions FR"}],"LASTMINMAX":"NULL","LASTVALUE":"NULL","NOUNIT":[{"ATTRIBUTEID":2,"DISABLED":"disabled","HASASSET":"","MAXVALUEPH":"","MAXVALUETP":" min/max","MINVALUEPH":"","MINVALUETP":"Aucune valeur","TXTMINMAX":"","vdb":""}],"SEQUENCE":511,"TYPEATTRIBUTE":1,"VALUES":["Actif\\0\\4","Passif\\0\\5","Non\\0\\6"]
        },
            ]
        }]
    }]
  }
    yield put({type:FETCHED_ARTICLE_ATTR,payload:AttrResponse})
   }

export function* productInfoWatcher(){
    yield takeLatest(GET_ARTICLE_INFO,getProductInfoWorker);
}

export function* productTagsWatcher(){
    yield takeLatest(GET_TAGS_ARTICLE,getArticleTags);
}

export function* productAttrWatcher(){
    yield takeLatest(GET_ATTR_ARTICLE,getArticleAttr);
}