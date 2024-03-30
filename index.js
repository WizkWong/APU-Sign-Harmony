import { createClient } from './node_modules/@supabase/supabase-js'

const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const getImageUrl = (name) => {
  return new URL(`./assets/sign-language/${name}.jpg`, import.meta.url).href;
}

const generateSignLanguage = (alphabet) => 
    alphabet.replace(/[^a-zA-Z]/g, '')
            .split("")
            .reduce((html, c) => 
              html.concat(`<div class="sign-box"><img src="${getImageUrl(c.toLowerCase())}"/><p>${c.toUpperCase()}</p></div>\n`)
            , "");

document.getElementById("student-input-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const tpnumber = document.getElementById("tpnumber").value;

    const { error } = await supabase.from("student").insert({
      name: name,
      tp_number: tpnumber,
    });

    if (error) {
      console.log(error);
    }

    const sign_langauge = document.getElementById("sign-language-img");
    
    const studentInfo = `<p class="student-info">Your Name : ${name}</p>`;
    sign_langauge.innerHTML = `${studentInfo}<div class="flex-box">${generateSignLanguage(name)}</div>`;
    sign_langauge.hidden = false;
  });


