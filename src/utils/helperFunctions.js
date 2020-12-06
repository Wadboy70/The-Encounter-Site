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

export const calendarDateFormatting = (date) => {
  return date ? (`${date.getYear()}/${date.getMonth()}/${date.getDate()}`) : '';
}

export const calendarDateGetTime = (date) => {
  let hour = date.getHours(), noonStat = 'am', minute = date.getMinutes();
  if(hour >= 12){
    noonStat = 'pm';
    hour -= 12;
  };
  if (hour === 0) hour = 12;
  if(minute/10 < 1) minute = '0' + minute;
  return date ? (`${hour}${Number(minute) > 0 ? `:${minute}` : ''} ${noonStat}`) : '';
}