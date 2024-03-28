import { createClient } from './node_modules/@supabase/supabase-js'

const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

    const prerequisite = document.getElementById("prerequisite");
    prerequisite.hidden = true;

    const main = document.getElementById("main");
    main.hidden = false;
  });

document.getElementById("sign-language-input-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const alphabet = document.getElementById("alphabet").value;

    const charsList = alphabet.replace(/[^a-zA-Z]/g, '').split("");
    
    const imgHtml = charsList.reduce((html, c) => 
      html.concat(`<div><img src="./assets/sign-language/${c}.jpg"/><p>${c.toUpperCase()}</p></div>\n`)
    , "")

    const sign_langauge = document.getElementById("sign-language-img");
    sign_langauge.innerHTML = `<div class="flex-box">${imgHtml}</div>`;
  });
