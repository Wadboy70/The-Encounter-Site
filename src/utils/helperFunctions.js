export const titleCaseSentence = (str) => {
    if (!str || (str.length === 0)) return ''; 
    let words = str.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
    return(words.join(' '));
};

export const parseFirestoreDate = (dateVal) => {
    let date;
    try {
        date = dateVal?.toDate().toDateString();
    } catch{
            date = '';
    }
    return date;
};