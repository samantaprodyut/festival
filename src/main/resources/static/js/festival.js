
/* -------- About dropdown -------- */
document.querySelectorAll('.dd').forEach(dd=>{
  const btn=dd.querySelector('.dd-btn');
  const setOpen=v=>{dd.dataset.open=v; btn.setAttribute('aria-expanded',v);};
  btn.addEventListener('click',e=>{e.stopPropagation(); setOpen(dd.dataset.open!=='true');});
  dd.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches) setOpen(true);});
  dd.addEventListener('mouseleave',()=>{if(matchMedia('(hover:hover)').matches) setOpen(false);});
  dd.querySelectorAll('.dd-menu a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('click',e=>{if(!dd.contains(e.target)) setOpen(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){setOpen(false); btn.blur();}});
});

/* -------- marquee bands --------
const bands={
  band1:["Frames Beyond Borders","Sounds Beyond Borders"],
  band2:["Reel Futures","Global Echoes","Future Frequencies","Roots &amp; Routes"],
  band3:["Create","Collaborate","Cross Borders"]
};
Object.entries(bands).forEach(([id,words])=>{
  document.getElementById(id).innerHTML=[...words,...words,...words,...words].map(w=>'<span>'+w+'</span>').join('');
});
*/

/* -------- marquee bands -------- */
const bands = {
    band1: ["Logo1.png","Logo2.png","Logo3.png","Logo4.png","Logo5.jpg","Logo6.jpg","Logo7.jpg","Logo8.png","Logo9.png","Logo10.png","Logo11.png","Logo12.png","Logo13.png","Logo14.png","Logo15.png","Logo16.png","Logo17.jpeg"].map((file,i)=>`<img src="/images/${file}" class="band-logo" alt="Sponsor Logo ${i+1}">`),
    band2: ["Reel Futures","Global Echoes","Future Frequencies","Roots & Routes"],
    band3: ["Create","Collaborate","Cross Borders"]
};
Object.entries(bands).forEach(([id,words])=>{
    document.getElementById(id).innerHTML = id === "band1"
        ? [...words,...words].map(w=>`<span class="logo-item">${w}</span>`).join('')
        : [...words,...words,...words,...words].map(w=>`<span>${w}</span>`).join('');
});

/* -------- programme data -------- */
const DAYS=[
    {n:"Day 01",date:"Thu 22 Oct",slots:[
            ["09:00 – 10:00","Discovery","Inauguration","Key Note Address","Festival inauguration with keynote addresses by the Chief Guest and the Guest of Honour. CHIEF GUEST: Shri. Darshan Jariwala · GUEST OF HONOUR: Shri. Mayur Puri","both"],
            ["10:00 – 12:15","Discovery","Masterclass","From Page to Screen: The Art of Character-Driven Storytelling and Dialogue Writing in Indian Cinema","How writers build memorable characters and write dialogue that feels true in Indian cinema. SPEAKERS: Mr. Siddharth Singh · Ms. Garima Wahal","film"],
            ["12:15 – 13:00","—","Break","Lunch break","","brk"],
            ["13:00 – 14:00","Executive Classroom","Masterclass","More Than Just a Voice","The craft and career behind professional voice work in ads, film, animation, dubbing and podcasts. SPEAKER: Mr. Rajesh Kava","both"],
            ["13:00 – 14:00","Wisdom","Panel Discussion","Rights, Reach & Revenue: The Business Behind Content in a Global Media World","How content is protected, marketed and sold across markets and platforms, from contract to global screen. SPEAKERS: Mr. Debkumar Dasgupta · Mr. Dominic D'Souza · Mr. Sanjay Narayanan Pisharody · MODERATOR: Prof. Ujjwal A Chowdhury","both"],
            ["14:00 – 15:00","Executive Classroom","Masterclass","From Idea to Audience: Developing, Producing and Promoting Indian Stories Across TV, Film and the AI Era","Following an Indian story through development, production and promotion across TV, film and the AI era. SPEAKER: Ms. Poonam Shroff","film"],
            ["14:00 – 15:00","Wisdom","Panel Discussion","The Gujarati Screen: Rooted Stories, New Visions","The creative revival of Gujarati cinema and how rooted local stories reach national and global screens. SPEAKERS: Mr. Abhishek Shah · Mr. Ishaan Randeria · MODERATOR: Mr. Mihir Pathak","film"],
            ["14:00 – 15:00","Online (Zoom)","Panel Discussion","One Story, Many Worlds: Cinema Across Cultures, Languages and Borders","International filmmakers on how personal stories cross languages, cultures and borders. SPEAKERS: Ms. Dari Gushan · Ms. Mari Cielo Pajares · Mr. Rai Pendet · Mr. Mehdi Malecki · Mr. Eman Thabet · MODERATOR: Mr. Prashit Bhatt","film"],
            ["15:00 – 15:15","—","Break","Tea break","","brk"],
            ["15:15 – 16:15","Executive Classroom","Masterclass","Cinema in 60 Seconds: Making Reels with a Filmmaker’s Eye","How sports-cinema storytelling moves from the big screen into short brand films and reels. SPEAKERS: Mr. Manish Bhati · Mr. Kartik Negandhi","film"],
            ["15:15 – 16:15","Wisdom","Fireside Chat","From Reel to Royalty: Who Owns the Song in India’s Streaming Era?","Who owns a film song in India's streaming era, and who gets paid when it plays. SPEAKERS: Ms. Kaveri Ingle · Mr. Daryl Suchitha · MODERATOR: Mr. Utsav Raval","music"],
            ["16:00 – 17:00","Online (Zoom)","Panel Discussion","The Cinematic Aesthetic: Building Narrative Resonance through Visual Composition","How framing, light, colour and camera movement carry a story's emotion and meaning. SPEAKERS: Mr. Denny Chrisna · Mr. Giovanni Coevert · Mr. Ihab Fares · Mr. Jean Sidaner · MODERATOR: Mr. Rohit Purohit","film"]
        ]},

    {n:"Day 02",date:"Fri 23 Oct",slots:[
            ["10:00 – 11:00","Discovery","Panel Discussion","The Female Gaze","How women's perspectives shape characters, forms and stories across film, theatre and digital platforms. SPEAKERS: Ms. Anamika Haksar · Ms. Anusha Nandkumar · MODERATOR: Mr. Sartaz Jaffri","film"],
            ["10:00 – 12:00","Executive Classroom","Workshop","Frame to Feature: Visual Storytelling with Canon","Hands-on: composition, lighting and sequencing with Canon gear, ending in a five-image photo story critique. SPEAKER: Mr. Dhruvin Jain","film"],
            ["11:00 – 12:00","Discovery","Masterclass","Writing the Idea, Owning the IP: A Creator’s Journey from Reality TV to Spy Thrillers to Ghazals","Moving one idea across TV, OTT and music, and going from writer-for-hire to IP owner. SPEAKER: Mr. Vaibhav Modi","both"],
            ["12:15 – 13:00","—","Break","Lunch break","","brk"],
            ["13:00 – 15:00","Executive Classroom","Film Screening","Borderlands","Screening of Borderlands, followed by a conversation on real-life storytelling in documentary. SPEAKER: Mr. Samarth Mahajan","film"],
            ["13:00 – 14:00","Wisdom","Panel Discussion","From Brief to Binge: Marketing Stories in the Streaming Era","Turning creative briefs into campaigns that win audiences in the OTT era. SPEAKERS: Ms. Ankita Singh · Mr. Ashutosh Chaturvedi · Ms. Kanika Dua · MODERATOR: RJ Palak","film"],
            ["14:00 – 16:30","Classroom / Discovery","Film Screening","Ghode Ko Jalebi Khilane Le Ja Riya Hoon","Screening of Anamika Haksar's experimental film on urban life and marginalised voices. SPEAKER: Ms. Anamika Haksar","film"],
            ["14:00 – 16:00","Wisdom","Workshop","The Colour of Cinema: Crafting the Film Look Through the Lens","Designing a film look through lens, light and colour, with a live shooting demonstration. SPEAKER: Mr. Shadab Alam","film"],
            ["14:00 – 15:30","Online (Zoom)","Panel Discussion","PIXELS, PAPERS & POSSIBILITIES: The Artistry Behind the Technology of Animation","Animation filmmakers on character design, world-building, and where art, technology and AI meet. SPEAKERS: Ms. Hannah Schogger · Mr. Cristian Damnotti · Mr. Radheya Jang · MODERATOR: Mr. Aakash Jain","film"],
            ["15:00 – 15:15","—","Break","Tea break","","brk"],
            ["15:15 – 16:15","Executive Classroom","Fireside Chat","Stories That Dare: Making Socially Relevant Cinema for the Mainstream / साहसी कहानियाँ: मुख्यधारा के लिए सामाजिक सरोकार का सिनेमा","Making socially relevant cinema for mainstream audiences, from Road to Sangam to OMG 2 and Ohh My Dog. SPEAKER: Mr. Amit Rai · MODERATOR: Ms. Rekha Khan","film"],
            ["16:00 – 17:00","Wisdom","Fireside Chat","Content Is King, But Who Builds the Kingdom? Making and Monetising Stories in India's OTT Era","The economics of OTT content: how stories are developed, funded, produced and made to pay. SPEAKERS: Mr. Praver Awal · Ms. Archita Jasani · MODERATOR: Mr. Pankaj Mavchi","film"],
            ["16:00 – 17:30","Online (Zoom)","Panel Discussion","REALITY REFRAMED: The Art of Finding Stories in the World Around Us","Documentary filmmakers on the craft and ethics of finding stories in the world around us. SPEAKERS: Mr. Antonio Aleixo · Mr. Ali Sedaghat · Mr. Amir Rezaei · MODERATOR: Mr. Sumit Mishra","film"]
        ]},

    {n:"Day 03",date:"Sat 24 Oct",slots:[
            ["10:00 – 11:00","Wisdom","Panel Discussion","From Idea to Audience: How Stories Get Made Across TV, OTT and Live Stages","How stories are developed, pitched, produced and promoted across TV, OTT and live stages. SPEAKERS: Ms. Vaneeta Sridhar · Ms. Ritika Bajaj · Ms. Ratisatu Galani · MODERATOR: RJ Palak","both"],
            ["11:00 – 12:00","Executive Classroom","Masterclass","Selling the Story: The Art and Craft of Promotional Campaigns","How promotional campaigns are built: trailers, posters, social buzz and launch-day strategy. SPEAKER: Mr. Partho Ghosh","film"],
            ["11:00 – 12:00","Wisdom","Panel Discussion","The Last Mile of Cinema: How a Film Reaches the Screen and Earns Its Money","How a film is acquired, released, given screens and shows, and how its revenue is shared. SPEAKERS: Mr. Utpal Acharya · Mr. Kuldeep Singh Sisodiya · MODERATOR: Mr. Mahesh Digrajkar","film"],
            ["11:00 – 12:00","Online (Zoom)","Panel Discussion","THE SOUND OF CINEMA: How Sound Shapes Emotion, Atmosphere and the Cinematic Experience","How sound design, music and silence build atmosphere, tension and immersive cinematic worlds. SPEAKERS: Ms. Dari Gushan · Mr. Abs Refat · Mr. Pierre Maurin · Mr. Samy Aljane · MODERATOR: Rashi Dhariwal","music"],
            ["12:15 – 13:00","—","Break","Lunch break","","brk"],
            ["14:00 – 15:00","Discovery","Fireside Chat","Use of Visuals and Sound in Action Storytelling","How camera, editing, choreography and sound turn fights, chases and stunts into storytelling. SPEAKER: Mr. Dilip Ghosh","both"],
            ["14:00 – 15:00","Wisdom","Masterclass","The Producer’s Cut: Turning a Brand Brief into Screen-Ready Content","The producer's role in turning a brand brief into screen-ready content, plus careers in production. SPEAKER: Mr. Supriyo Sen Sharma","film"],
            ["14:00 – 15:00","Online (Zoom)","Panel Discussion","Writers panel: BEYOND LANGUAGE, INTO STORY / Can a Story Speak to the World Without Losing Its Roots?","International screenwriters on keeping stories rooted in culture while reaching audiences across languages. SPEAKERS: Mr. Noé Després · Mr. Kianoush Eslami · Mr. Morteza Solgi · Mr. Samuel Bester · MODERATOR: Ms. Kajol Sanjay Kalia","film"],
            ["15:00 – 15:15","—","Break","Tea break","","brk"],
            ["15:30 – 17:00","—","Closing Ceremony","Valedictory Session / Key Note Address","Closing ceremony with the valedictory keynote address by the Chief Guest. CHIEF GUEST: Shri. Girish Kohli","both"]
        ]},
{n:"Day 04",date:"Sun 25 Oct",slots:[
  ["19:00 – 21:30","Outdoor stage","Proshow","Proshow","The festival's grand crescendo: a full-scale concert to close the four days.","both"]]}
];

const tabWrap=document.getElementById('dayTabs'), slotWrap=document.getElementById('slots');
DAYS.forEach((d,i)=>{
  const b=document.createElement('button');
  b.setAttribute('role','tab'); b.setAttribute('aria-selected', i===0?'true':'false');
  b.innerHTML='<span class="dn">'+d.n+'</span><span class="dd">'+d.date+'</span>';
  b.onclick=()=>{[...tabWrap.children].forEach(c=>c.setAttribute('aria-selected','false'));
    b.setAttribute('aria-selected','true'); renderDay(i);};
  tabWrap.appendChild(b);
});
function renderDay(i){
  slotWrap.innerHTML=DAYS[i].slots.map(s=>{
    const cls=s[5]==='music'?'mus':s[5]==='both'?'both':s[5]==='brk'?'brk':'';
    const brief=s[4]?'<p>'+s[4]+'</p>':'';
    const meta=s[5]==='brk'?'':'<div class="m"><span class="fm">'+s[2]+'</span>'+s[1]+'</div>';
    return '<div class="slot '+cls+'"><div class="t">'+s[0]+'</div><div class="b"><h6>'+s[3]+'</h6>'+brief+'</div>'+meta+'</div>';
  }).join('');
}
renderDay(0);

/* -------- competition switch -------- */
/*document.querySelectorAll('.switch button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.switch button').forEach(x=>x.setAttribute('aria-selected','false'));
    b.setAttribute('aria-selected','true');
    const music=b.dataset.ch==='music';
    document.getElementById('pane-film').hidden=music;
    document.getElementById('pane-music').hidden=!music;
    document.getElementById('compete').style.setProperty('--accent',music?'var(--turquoise)':'var(--gold)');
  };
});*/

document.querySelectorAll('.switch button').forEach(b => {

  b.onclick = () => {

    document.querySelectorAll('.switch button').forEach(x =>
      x.setAttribute('aria-selected', 'false')
    );

    b.setAttribute('aria-selected', 'true');

    const channel = b.dataset.ch;

    document.getElementById('pane-film').hidden = channel !== 'film';
    document.getElementById('pane-music').hidden = channel !== 'music';
    document.getElementById('pane-reel').hidden = channel !== 'reel';

    const accent =
      channel === 'music'
        ? 'var(--turquoise)'
        : channel === 'reel'
          ? 'var(--pink)'
          : 'var(--gold)';

    document
      .getElementById('compete')
      .style.setProperty('--accent', accent);
  };

});

/* -------- count-up stats -------- */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters=document.querySelectorAll('.stat .n');
const cio=new IntersectionObserver((es,obs)=>{
  es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, to=+el.dataset.to, pre=el.dataset.prefix?'₹':'',suffix=el.dataset.suffix||'';
    if(reduce){el.textContent=pre+to+suffix; obs.unobserve(el); return;}
    const dur=1100, t0=performance.now();
    const step=t=>{
      const p=Math.min(1,(t-t0)/dur), v=Math.round(to*(1-Math.pow(1-p,3)));
      el.textContent=pre+v+suffix;
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step); obs.unobserve(el);
  });
},{threshold:.4});
counters.forEach(c=>cio.observe(c));

/* -------- countdown -------- */
const DEADLINE=new Date('2026-09-26T23:59:00+05:30').getTime();
function tick(){
  const ms=DEADLINE-Date.now();
  const set=(id,v)=>document.getElementById(id).firstChild.nodeValue=String(v).padStart(2,'0');
  if(ms<=0){['cdD','cdH','cdM','cdS'].forEach(id=>set(id,0));return;}
  set('cdD',Math.floor(ms/864e5)); set('cdH',Math.floor(ms/36e5)%24);
  set('cdM',Math.floor(ms/6e4)%60); set('cdS',Math.floor(ms/1e3)%60);
}
tick(); setInterval(tick,1000);


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("subscribeForm");
    if (form) {
        form.addEventListener("submit", function () {
            setTimeout(function () {
                document.getElementById("subscribeSuccess").style.display = "block";
                form.reset();
            }, 1000);
        });
    }
});


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    slides[currentSlide].classList.add("active");
}, 4000);

