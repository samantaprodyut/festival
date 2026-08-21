
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

/* -------- marquee bands -------- */
const bands={
  band1:["Frames Beyond Borders","Sounds Beyond Borders"],
  band2:["Reel Futures","Global Echoes","Future Frequencies","Roots &amp; Routes"],
  band3:["Create","Collaborate","Cross Borders"]
};
Object.entries(bands).forEach(([id,words])=>{
  document.getElementById(id).innerHTML=[...words,...words,...words,...words].map(w=>'<span>'+w+'</span>').join('');
});

/* -------- programme data -------- */
const DAYS=[
 {n:"Day 01",date:"Thu 24 Oct",slots:[
  ["10:00 – 11:15","Discovery","Inauguration","Inauguration","Invocation music, mascot launch, addresses by the Guests of Honour and a keynote from the Chief Guest.","both"],
  ["11:15 – 12:30","Discovery","Fireside chat","From Script to Strike","Building high-intensity cinema: writing under pressure, staging action and holding an audience.","film"],
  ["12:30 – 13:30","Discovery","Fireside chat","The Sound Between the Frames","Sound is the half of cinema an audience feels but never sees — from location recording to the final mix.","music"],
  ["13:30 – 14:15","—","Break","Lunch","","brk"],
  ["14:15 – 15:15","Discovery","Open session","Unscripted","Shifting the spotlight from performance to personality, in front of students.","both"],
  ["14:15 – 16:15","AB3 – 201","Workshop","Framing the Vision","How lighting, composition and camera movement build a shot worth looking at.","film"],
  ["14:15 – 16:15","AB3 – 203","Workshop","Cut. Colour. Create.","Editing and cinematic colour grading — turning raw footage into something that lands.","film"],
  ["14:15 – 16:15","AB3 – 205","Workshop","The Bedroom Studio","Building a track from scratch on a laptop, the way most records are made now.","music"],
  ["14:30 – 15:30","Online","Panel","The Filmmaker's Forum","Animation, documentary and short-format filmmakers on craft and economics.","film"],
  ["15:30 – 17:00","Discovery","Screening + chat","History Breathes: Lal Bahadur Shastri","A documentary on the freedom fighter and former Prime Minister, followed by an interaction.","film"],
  ["15:30 – 17:00","Online","Panel","The Business of Indie Cinema","Developing a narrative, then financing it — production, crowdfunding and everything between.","film"],
  ["16:30 – 18:30","AB3 – 301","Workshop","Pixels to Perfection","Capturing sharp, high-quality visuals with modern digital camera systems.","film"],
  ["16:30 – 18:30","AB3 – 303","Workshop","Beyond the Frame","Large-format filmmaking, and what the format changes about how you shoot.","film"],
  ["16:30 – 18:30","AB3 – 305","Workshop","Mic Check","Live sound, stage acoustics and the art of the mix.","music"],
  ["17:30 – 18:30","Online","Panel","The Editor's Cut","Editors, colourists and VFX artists on building worlds after the shoot is over.","film"],
  ["19:00 – 20:00","Outdoor stage","Showcase","The Runway Edit","The runway reimagined as cinema, where every garment is a frame.","both"],
  ["20:00 – 21:00","Outdoor stage","Competition","The MicDrop","A single spotlight, a silent stage and a voice that dares to fill it.","music"]]},
 {n:"Day 02",date:"Fri 25 Oct",slots:[
  ["10:00 – 11:30","Online","Fireside chat","The Pulse of the Scene","How filmmakers build emotional truth out of image, sound and silence.","film"],
  ["10:00 – 12:00","Auro Student Center","Workshop","Rhythm in Motion","Choreographing to the language of musical tempo.","music"],
  ["10:00 – 12:00","Executive Classroom","Workshop","Lighting the Mood","Light, colour and shadow, and the psychology of how an audience reads them.","film"],
  ["10:30 – 12:30","Discovery","Screening","Cinematic Spotlight","The nominated and selected films of AU-IFMF 2026.","film"],
  ["11:45 – 13:00","Online","Fireside chat","Permission to Fall Apart","Directors and actors on trust, tension and the vulnerability of performance.","film"],
  ["12:00 – 13:00","AB3","Workshop","Design Decode","A crash course in layout, typography, colour theory and visual hierarchy.","film"],
  ["12:00 – 13:00","AB3","Workshop","Cinema in Your Pocket","Mobile filmmaking essentials — shooting, framing, lighting and cutting on a phone.","film"],
  ["12:00 – 13:00","AB3 – 205","Workshop","The Songwriter's Room","Finding a central image and writing the line that stays.","music"],
  ["13:00 – 14:00","—","Break","Lunch","","brk"],
  ["14:00 – 15:00","Discovery","Fireside chat","From Riyaaz to Reels","Behind every recognisable voice: years of training, rejection and reinvention.","music"],
  ["14:00 – 15:30","Auro Student Center","Masterclass","Scoring the Silence","How a score tells an audience what to feel before a word is spoken.","music"],
  ["14:00 – 15:30","AB3","Workshop","The Greenlight Room","Film licensing and certification: where stories earn their right to be seen.","film"],
  ["14:00 – 15:30","AB3","Workshop","Licensed to Play","Music licensing and certification, from creation to clearance.","music"],
  ["14:00 – 15:30","Online","Fireside chat","Zero to Screen","Making cinema with nothing but vision, and getting it watched.","film"],
  ["15:30 – 17:00","Discovery","Screening + chat","History Breathes: R K Laxman","A documentary on the cartoonist, followed by an interaction with his family.","film"],
  ["15:30 – 17:00","Online","Panel","Animated Realities","Bringing unreal worlds to life, from idea to movement.","film"],
  ["17:30 – 18:30","Outdoor stage","Competition","Jam Wars","Battle of the bands — a high-energy live jam on the main stage.","music"],
  ["19:00 – 20:30","Outdoor stage","Competition","Groove Clash","The dance face-off, where every move speaks louder than words.","music"]]},
 {n:"Day 03",date:"Sat 26 Oct",slots:[
  ["10:00 – 11:30","Discovery","Screening + chat","History Breathes: Anjaan","A documentary on the lyricist, followed by an interaction with his family.","film"],
  ["10:00 – 13:00","Executive Classroom","Jury viewing","Cinematic Spotlight","Closed jury screening of the nominated and selected films.","film"],
  ["10:30 – 12:00","Auro Student Center","Lecture-demo","The Living Raag","The classical foundation under popular music, performed as it is explained.","music"],
  ["11:00 – 12:30","Online","Panel","Streams, Royalties &amp; the Independent Artist","Distribution has never been easier and earning never more complicated.","music"],
  ["11:45 – 13:15","Discovery","Screening + chat","History Breathes: Vinda Karandikar","A documentary on the Jnanpith-winning poet, followed by an interaction.","film"],
  ["12:15 – 13:15","Auro Student Center","Fireside chat","Bhasha, Beat &amp; Belonging","The music growing outside Bollywood, in the languages India actually sings in.","music"],
  ["13:15 – 14:15","—","Break","Lunch","","brk"],
  ["14:15 – 15:15","Discovery","Screening","Special screening","A selected short film, followed by an interaction with the filmmaker.","film"],
  ["14:15 – 15:45","Online","Panel","The Music Supervisor's Playlist","One song in the right scene can outlive the film around it.","music"],
  ["15:30 – 17:00","Discovery","Screening","Cinematic Spotlight","The second public screening block of nominated and selected films.","film"],
  ["15:30 – 17:00","Outdoor stage","Showcase","Sur Sabha","Before the awards are read out, the festival simply plays.","music"],
  ["17:30 – 19:00","Discovery","Valedictory","Awards ceremony","Winners of the film and music competitions are announced and presented.","both"]]},
 {n:"Day 04",date:"Sun 27 Oct",slots:[
  ["14:00 – 15:30","Outdoor main stage","Workshop","Stage to Screen","The anatomy of a live show, walked through on the festival's own stage as it is built.","music"],
  ["16:00 – 17:15","Discovery","Fireside chat","Before the Encore","Hours before the lights come on, the headline artist steps into a quieter room.","music"],
  ["18:00 – 19:00","Outdoor stage","Curtain raiser","The Opening Act","Winners of The MicDrop and Jam Wars open the main stage.","music"],
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
document.querySelectorAll('.switch button').forEach(b=>{
  b.onclick=()=>{
    document.querySelectorAll('.switch button').forEach(x=>x.setAttribute('aria-selected','false'));
    b.setAttribute('aria-selected','true');
    const music=b.dataset.ch==='music';
    document.getElementById('pane-film').hidden=music;
    document.getElementById('pane-music').hidden=!music;
    document.getElementById('compete').style.setProperty('--accent',music?'var(--turquoise)':'var(--gold)');
  };
});

/* -------- count-up stats -------- */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters=document.querySelectorAll('.stat .n');
const cio=new IntersectionObserver((es,obs)=>{
  es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target, to=+el.dataset.to, pre=el.dataset.prefix?'₹':'';
    if(reduce){el.textContent=pre+to; obs.unobserve(el); return;}
    const dur=1100, t0=performance.now();
    const step=t=>{
      const p=Math.min(1,(t-t0)/dur), v=Math.round(to*(1-Math.pow(1-p,3)));
      el.textContent=pre+v;
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step); obs.unobserve(el);
  });
},{threshold:.4});
counters.forEach(c=>cio.observe(c));

/* -------- countdown -------- */
const DEADLINE=new Date('2026-09-06T23:59:00+05:30').getTime();
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

