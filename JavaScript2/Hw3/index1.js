var text="Lorem 'ipsum' dolor sit 'amet', consectetur 'adipisicing' e'lit. Amet, cum!";
console.log(text.replace(/\B'|'\B/gm, '"'));