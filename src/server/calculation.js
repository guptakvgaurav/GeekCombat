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
    'AccountSource._Website': -0.29197076,

    'Industry_Automobile': -0.86896223,
    'Industry_Aviation': 0.0000,
    'Industry_BFSI': -2.27732349,
    'Industry_ConsumerElectronics': 0.000,
    'Industry_E-Learning': 0.000,
    'Industry_E-commerce': 3.33136871,
    'Industry_Education': 0.0000,
    'Industry_FMCG': 0.0000,
    'Industry_Healthcare': -0.99899002,
    'Industry_Internet': 2.2503596,
    'Industry_M&E': -1.53600324,
    'Industry_Others': -2.73781802,
    'Industry_Publishing': 0.0000,
    'Industry_Technology': 1.47508042,
    'Industry_Telecommunication': 0.0000
}

function calculation (decisionMaker, companySize, geo, accountSource, industry) {
    let d_m_result = 0;
    let c_s_result = 0;
    let geo_result = 0;
    let a_s_result = 0;
    let i_result = 0;

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

    if(industry){
        i_result = data[industry]
    }

    var sum = d_m_result + c_s_result + geo_result + a_s_result + i_result;
    console.log(sum)
    return ((sum + 1)/2);
};

console.log(calculation(0, 'Company_Size_L', 'TTN_GEO_Africa', 'AccountSource._Website', 'Industry_FMCG'))