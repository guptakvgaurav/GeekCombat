// import config from './config'
// let data = config.data;
let decisionMaker = 1;
let companySize = 'Company_Size_L';
let geo = 'TTN_GEO_India';
let accountSource = 'AccountSource._References';
let data = {
    'Decision_Maker': 0.00743776,

    'TTN_GEO_ANZ': 0.0105744,
    'TTN_GEO_Africa': -0.17103397,
    'TTN_GEO_Asia': -0.4421882,
    'TTN_GEO_Europe': -0.32459939,
    'TTN_GEO_India': 0.46362196,
    'TTN_GEO_ME': -0.37501942,
    'TTN_GEO_US': -0.22500243,
    'TTN_GEO_Unknown': 0.25427133,

    'Company_Size_L': -0.09709653,
    'Company_Size_M': -0.00112345,
    'Company_Size_S': -0.33142791,
    'Company_Size_XL': 0.22446872,
    'Company_Size_XS': 0.06606255,
    'Company_Size_XXL': 0.4041682,

    'AccountSource._Inter Company': 0.07087807,
    'AccountSource._OLG': -0.22783232,
    'AccountSource._References': 0.42078672,
    'AccountSource._SEM': 0.20093201,
    'AccountSource._Website': -0.29197076
}

function calculation (decisionMaker, companySize, geo, accountSource) {
    let d_m_result = 0;
    let c_s_result = 0;
    let geo_result = 0;
    let a_s_result = 0;

    if (decisionMaker == 1){
        d_m_result = data['Decision_Maker']
    }

    if (companySize){
        c_s_result = data[companySize]
    }

    if (geo){
        geo_result = data[geo]
    }

    if (accountSource){
        a_s_result = data[accountSource]
    }

    return d_m_result + c_s_result + geo_result + a_s_result;
};

console.log(calculation(0, 'Company_Size_S', 'TTN_GEO_US', 'AccountSource._OLG'))