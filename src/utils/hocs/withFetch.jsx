const withFetch = async (url = '', setFunc = () => {}, errFunc) => {
    try{
        await fetch(url)
        .then(val => {
            return val.json();
        })
        .then(res => {
            console.log(res);
            setFunc(res);
        })
    } catch(err){
        errFunc ? errFunc(err) : console.log(err);
    }
};

export default withFetch;