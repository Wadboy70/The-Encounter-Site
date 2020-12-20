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
};

export const replaceWhitespace = (str, rep = '-') => {
  return str.replace(/\s/g,rep);
};

export const replaceUnderscore = (str) => {
  return str.replace(/_/g,' ');
};

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
      .then(res => res.json())
      .catch(err => err);
};

export const calendarDateFormatting = (date) => {
  return date ? (`${date.getMonth()+1}/${date.getDate()}/${date.getYear()+1900}`) : '';
};

export const calendarDateGetTime = (date) => {
  let hour = date.getHours(), noonStat = 'am', minute = date.getMinutes();
  if(hour >= 12){
    noonStat = 'pm';
    hour -= 12;
  };
  if (hour === 0) hour = 12;
  minute = twoDigitPrecededByZero(minute);
  return date ? (`${hour}${Number(minute) > 0 ? `:${minute}` : ''} ${noonStat}`) : '';
};

export const twoDigitPrecededByZero = (num) => {
  return (num/10 < 1) ? ('0' + num) : num;
};

export const toMilitaryTime = (hour, noonTime) => {
  let realHour = (Number(hour) === 12) ? 0 : hour;
  return noonTime === 'am' ? realHour : Number(realHour) + 12;
};


//From hackerNoon
//https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

export const copyToClipboard = str => {
  const el = document.createElement('textarea');  
  el.value = str;                                 
  el.setAttribute('readonly', '');                
  el.style.position = 'absolute';                
  el.style.left = '-9999px';                      
  document.body.appendChild(el);                  
  const selected =           
    document.getSelection().rangeCount > 0        
      ? document.getSelection().getRangeAt(0)     
      : false;                                    
  el.select();                                    
  document.execCommand('copy');                   
  document.body.removeChild(el);                  
  if (selected) {                                 
    document.getSelection().removeAllRanges();    
    document.getSelection().addRange(selected);   
  }
};   