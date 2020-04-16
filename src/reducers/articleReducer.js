import {GET_TOP_ARTICLES} from '../actions/types';
import data from './'

const initialState={
    articles:[],
    Loaded:false,
    };
const userArticlesReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_TOP_ARTICLES:
            console.log("call action");
            
                //for testing
                const artResponse = {data: [
                    {
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
                    },
                    {
                        "BARNEGATIVE": 66,
                        "BARPOSITIVE": 0,
                        "CODIC": 8265569,
                        "CREATIONDATE": "02/04/2020",
                        "DISPLAYPROGRESSATTRIBUTE": "",
                        "FAMILY": "Laptop MAC",
                        "FNACSKU": "",
                        "MARQUE": "APPLE",
                        "NAMECP": "TESTBTOBDROPSHIPMENT",
                        "URL": "/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeeQhYD8k",
                        "VISIBILTYINFOFNAC": "hidden"
                    },
                    {
                        "BARNEGATIVE": 19,
                        "BARPOSITIVE": 0,
                        "CODIC": 8265577,
                        "CREATIONDATE": "27/03/2020",
                        "DISPLAYPROGRESSATTRIBUTE": "",
                        "FAMILY": "Batterie divers",
                        "FNACSKU": "",
                        "MARQUE": "DURACELL",
                        "NAMECP": "TESTEFFBTOB",
                        "URL": "/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe.QhYD8k",
                        "VISIBILTYINFOFNAC": "hidden"
                    },
                    {
                        "BARNEGATIVE": 79,
                        "BARPOSITIVE": 0,
                        "CODIC": 8265585,
                        "CREATIONDATE": "06/05/2019",
                        "DISPLAYPROGRESSATTRIBUTE": "",
                        "FAMILY": "Compacts Ã  objectif interchangeable",
                        "FNACSKU": "",
                        "MARQUE": "SONY",
                        "NAMECP": "ALPHA 7 III ILCE7M3B *COPY*",
                        "URL": "/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbeeRhYD8k",
                        "VISIBILTYINFOFNAC": ""
                    },
                    {
                        "BARNEGATIVE": 15,
                        "BARPOSITIVE": 0,
                        "CODIC": 8265593,
                        "CREATIONDATE": "09/03/2020",
                        "DISPLAYPROGRESSATTRIBUTE": "",
                        "FAMILY": "CONNECTION PC",
                        "FNACSKU": "",
                        "MARQUE": "BELKIN",
                        "NAMECP": "Test julie BtoB",
                        "URL": "/PIMBO/appcen/LIB.WebRequest.cls?Np=LGqa5nuvsjvqsTOtgqqc9morceqbe.RhYD8k",
                        "VISIBILTYINFOFNAC": "hidden"
                    }]};

                //articles:action.payload.data
           return {payload:action.partResponse.data};
        default:
            return state;
    }
}

export default userArticlesReducer;