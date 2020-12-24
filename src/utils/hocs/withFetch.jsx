const withFetch = async (url = '', setFunc = () => {}, errFunc, attributes, defaultVal = '') => {
    try{
        await fetch(url)
        .then(val => {
            return val.json();
        })
        .then(res => {
            attributes ? setFunc(res[attributes] || defaultVal) : setFunc(res);
        })
    } catch(err){
        errFunc ? errFunc(err) : console.log(err);
    }
};

export default withFetch;