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

export const removeWhitespace = (str) => {
    return str.replace(/\s/g,'');
}

export const sendEmail = async ({to = '', message = '', subject = '', name = ''}) => {
    console.log(to);
    return fetch('/sendMail', {
        method: 'POST',
        body:JSON.stringify({
          "name": name,
          "to": to,
          "subject": subject,
          "text": message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json());
};