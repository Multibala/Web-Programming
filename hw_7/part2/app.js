const textarea = document.querySelector("textarea");const characters = document.querySelector("#character");const words = document.querySelector("#word");const sentences = document.querySelector("#sentences");const paragraph = document.querySelector("#paragraph");const reading_time = document.querySelector(".reading_time");const first = document.querySelector("#first");const second = document.querySelector("#second");const third = document.querySelector("#third");const fourth = document.querySelector("#fourth");const submit = document.querySelector(".submit");submit.addEventListener('click',()=>{    let time =new Date().getTime();   let str = textarea.value;   let count=0;    for (let i = 0; i <str.length ; i++) {        if(str.charAt(i)===' '){            count++;        }    }    let countWords = str.split(" ").length;    count = str.length-count;    characters.textContent ="characters:"+count;    words.textContent ="words:"+countWords;    let countSentence = str.split(".").length;    sentences.textContent ="sentences"+countSentence;    console.log(countSentence);    let countParapgh = str.split("\n").length;    console.log(countParapgh);    paragraph.textContent="paragraph: "+countParapgh;    let keyWords = str.split(" ");    let topKeywords = new Map();    for (let i = 0; i <keyWords.length ; i++) {        if(!topKeywords.has(keyWords[i].toLowerCase())){            topKeywords.set(keyWords[i].toLowerCase(),1);        }else{            let a =topKeywords.get(keyWords[i].toLowerCase());            topKeywords.set(keyWords[i].toLowerCase(),a+1);        }    }    const mapSort =new Map([...topKeywords.entries()].sort((a,b)=>b[1]-a[1]));    let aw =mapSort.entries();    let temp ;    temp =aw.next().value;    first.textContent=temp[0]+":"+temp[1];    temp =aw.next().value;    second.textContent=temp[0]+":"+temp[1];    temp =aw.next().value;    third.textContent=temp[0]+":"+temp[1];    temp =aw.next().value;    fourth.textContent=temp[0]+":"+temp[1];    let endTime = new Date().getTime();    reading_time.textContent="reading time:"+(endTime-time)/1000;    //});