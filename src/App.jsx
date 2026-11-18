import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Camera,
  Check,
  Flame,
  ImagePlus,
  Laugh,
  Mic,
  MicOff,
  RefreshCw,
  Send,
  Share2,
  Skull,
  Sparkles,
  Swords,
  Volume2,
  X,
} from "lucide-react";

const roasts = {
  Friendly: [
    "Tumhari selfie mein itni wholesome energy hai, mera attitude bhi 2 second ke liye logout ho gaya. Cute, unfortunately.",
    "Main roast karne aaya tha, par tumhari smile ne case ko thoda complicated kar diya. Chalo, aaj bach gaye.",
    "Tumhara vibe: chai ke saath extra biscuit. Thoda soft, full comfort, dangerously likeable.",
    "Itna effort selfie pe? Wah. Ab bas life ke baaki areas mein bhi yehi enthusiasm laana.",
  ],
  Savage: [
    "Tumhari selfie dekh ke mera Wi-Fi bhi disconnect ho gaya. Network issue nahi tha, bas usko bhi break chahiye tha.",
    "Face card toh theek hai, par expression aisa jaise Zomato ne order cancel karke personal apology bheji ho.",
    "Tumhara camera itna confident hai tumhare behalf pe, ki usko hi profile bana deni chahiye.",
    "Is selfie mein main character energy hai… bas story abhi writers' strike pe hai.",
    "Tumhara pose bol raha hai 'candid', par phone ka timer abhi bhi evidence de raha hai.",
  ],
  Nuclear: [
    "Ye selfie nahi, front camera ke khilaaf FIR hai, saala. Itni bakwaas lighting mein toh tumhara phone bhi bole, “mujhe kyun toda?”",
    "Tumhari vibe dekh ke lagta hai life ne bina padhe terms & conditions accept karwa liye—and now everything is fucked.",
    "Aaj ka look: “main sorted hoon” ka screenshot, par andar 47 unread messages aur dimaag mein full-on shitshow.",
    "Confidence ka charging port hota na, tum abhi 1% pe hote. Kya scene hai, yaar—thoda toh effort maar!",
    "Is photo ko dekh ke algorithm bola, “what the hell am I supposed to do with this?” Cat bhi confused, main bhi. 😹",
  ],
};

const catReplies = [
  "Excuse me? Main adopted nahi, emotionally unavailable hoon. Difference samjho. 😾",
  "Roast accepted. Comeback rejected. Please try again after 3–5 business naps. 🐾",
  "Mujhe roast kiya? Cute. Tumhare screen time report ko main witness bula raha hoon. 📱",
  "Bold words from someone whose camera roll has 900 screenshots and zero context. 😼",
  "Main billi hoon, tumhare opinions pe purr nahi karta. Next! 💅",
];

const interruptions = [
  "BREAKING: cat ne tumhara Wi-Fi judge kar diya 📡",
  "Ek second… main apni hi reflection ko roast kar raha tha 😼",
  "Meow meow. This meeting could've been an email 🐾",
  "Cat fact: tumhare ex se zyada loyal mera nap schedule hai.",
];

const scanLines = [
  "Scanning your questionable existence...",
  "Searching for personality... 404 NOT FOUND.",
  "Even Google is confused 💀",
  "Consulting the council of cats...",
];

function CatMascot({ laughing = false, dramatic = false }) {
  return (
    <div className={`cat-stage ${laughing ? "is-laughing" : ""} ${dramatic ? "is-dramatic" : ""}`} aria-label="Expressive orange cat mascot" role="img">
      <div className="cat-shadow" />
      <svg className="cat-svg" viewBox="0 0 300 290" aria-hidden="true">
        <ellipse cx="151" cy="266" rx="91" ry="17" fill="#d84e27" opacity=".18" />
        <path d="M75 106 54 28q-4-16 12-6l63 48M225 106l21-78q4-16-12-6l-63 48" fill="#f98a2b" stroke="#a8441c" strokeWidth="7" strokeLinejoin="round" />
        <path d="m75 71-8-27 34 29M225 71l8-27-34 29" fill="#ffb5a2" />
        <path d="M59 119Q59 56 150 56t91 63v74q0 70-91 70t-91-70Z" fill="#ff9b37" stroke="#a8441c" strokeWidth="7" />
        <path d="M87 71q18 17 26 44M213 71q-18 17-26 44" fill="none" stroke="#e56d21" strokeWidth="7" strokeLinecap="round" />
        <path d="M74 98q16 12 27 33M226 98q-16 12-27 33" fill="none" stroke="#e56d21" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="113" cy="143" rx="25" ry="29" fill="#fff5df" />
        <ellipse cx="188" cy="143" rx="25" ry="29" fill="#fff5df" />
        <ellipse className="cat-pupil" cx="119" cy="148" rx="9" ry="16" fill="#33221f" />
        <ellipse className="cat-pupil" cx="182" cy="148" rx="9" ry="16" fill="#33221f" />
        <circle cx="122" cy="142" r="3" fill="white" /><circle cx="185" cy="142" r="3" fill="white" />
        <path d="M94 111q18-15 37-1M169 110q19-15 38 1" fill="none" stroke="#713821" strokeWidth="6" strokeLinecap="round" />
        <path d="M140 176q10-10 20 0-10 11-20 0" fill="#e66f67" />
        <path d="M150 186q-4 18-21 17M150 186q4 18 21 17" fill="none" stroke="#713821" strokeWidth="4" strokeLinecap="round" />
        <path d="M78 178 29 167M79 190 28 193M222 178l49-11M221 190l51 3" fill="none" stroke="#713821" strokeWidth="3" strokeLinecap="round" />
        <g className="sunglasses">
          <path d="M79 128h61v32q-4 16-28 16t-29-16ZM160 128h61v32q-4 16-28 16t-29-16Z" fill="#20202a" stroke="#101016" strokeWidth="5" />
          <path d="M140 137q10-9 20 0" fill="none" stroke="#20202a" strokeWidth="7" />
          <path d="m89 134 25 24M171 134l25 24" stroke="white" strokeWidth="5" opacity=".72" />
        </g>
        <path d="M112 237q38-19 76 0v15q-38 19-76 0Z" fill="#f4d447" stroke="#a8441c" strokeWidth="4" />
        <path d="m130 243 20 8 20-8" fill="none" stroke="#a8441c" strokeWidth="3" />
      </svg>
      <span className="cat-sparkle sparkle-one">✦</span>
      <span className="cat-sparkle sparkle-two">✦</span>
      <span className="cat-laugh">HA HA HA!</span>
    </div>
  );
}

function App() {
  const [image, setImage] = useState("");
  const [level, setLevel] = useState("Savage");
  const [roast, setRoast] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [battleMessages, setBattleMessages] = useState([]);
  const [battleInput, setBattleInput] = useState("");
  const [muted, setMuted] = useState(false);
  const [interrupt, setInterrupt] = useState("");
  const [shake, setShake] = useState(false);
  const [adopted, setAdopted] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => () => {
    clearInterval(timerRef.current);
    if (image) URL.revokeObjectURL(image);
  }, [image]);

  const playSound = (frequency = 440, duration = 0.12, type = "triangle") => {
    if (muted) return;
    try {
      const audio = new AudioContext();
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.06, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + duration);
      oscillator.onended = () => audio.close();
    } catch (error) {
      console.warn("Sound effects are unavailable in this browser.", error);
    }
  };

  const triggerShake = () => {
    setShake(true);
    window.setTimeout(() => setShake(false), 480);
  };

  const loadImage = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      window.alert("Please choose an image file to give the cat something to judge.");
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      window.alert("That image is too big for this tiny cat. Please pick one under 12 MB.");
      return;
    }
    setImage(URL.createObjectURL(file));
    setRoast("");
    setAdopted(false);
    setBattleMessages([]);
    playSound(560, 0.09);
  };

  const chooseImage = (event) => {
    loadImage(event.target.files?.[0]);
    event.target.value = "";
  };

  const makeRoast = (roastLevel = level) => {
    if (!image) {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      fileRef.current?.click();
      return;
    }
    setScanning(true);
    setRoast("");
    setInterrupt("");
    setScanLine(0);
    playSound(250, 0.18, "sawtooth");
    let tick = 0;
    timerRef.current = window.setInterval(() => {
      tick += 1;
      setScanLine(tick % scanLines.length);
      if (tick >= 4) {
        clearInterval(timerRef.current);
        const options = roasts[roastLevel];
        setRoast(options[Math.floor(Math.random() * options.length)]);
        setScanning(false);
        triggerShake();
        playSound(680, 0.22, "square");
      }
    }, 150);
  };

  const roastMeHarder = () => {
    if (!image) {
      makeRoast();
      return;
    }
    const nextLevel = level === "Friendly" ? "Savage" : "Nuclear";
    setLevel(nextLevel);
    setRoast("");
    window.setTimeout(() => makeRoast(nextLevel), 0);
  };

  const sendBattle = (event) => {
    event.preventDefault();
    const text = battleInput.trim();
    if (!text) return;
    setBattleMessages((messages) => [
      ...messages,
      { from: "you", text },
      { from: "cat", text: catReplies[Math.floor(Math.random() * catReplies.length)] },
    ]);
    setBattleInput("");
    playSound(380, 0.1);
    triggerShake();
  };

  const adoptCat = () => {
    setAdopted(true);
    setRoast("Plot twist: ab tum is dramatic orange billu ke official parent ho. Adoption papers = ye reaction GIF. Khana dena mat bhoolna. 😼");
    setInterrupt("CONGRATS! Cat ne tumhare ghar ko 1-star review de diya 🏠");
    playSound(740, 0.25, "square");
    triggerShake();
  };

  const makeCard = async () => {
    if (!roast) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const context = canvas.getContext("2d");
    if (!context) {
      window.alert("Your browser couldn't create the roast card. Try taking a screenshot instead.");
      return;
    }
    const gradient = context.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, "#ff6d35");
    gradient.addColorStop(1, "#ffca62");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1350);
    context.fillStyle = "rgba(255,255,255,.2)";
    context.beginPath();
    context.arc(900, 220, 280, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#fff8ec";
    context.font = "900 82px system-ui, sans-serif";
    context.fillText("CAT ROASTS YOU", 70, 120);
    context.font = "68px system-ui, sans-serif";
    context.fillText("😼 🔥", 76, 222);
    context.fillStyle = "#211914";
    context.font = "800 42px system-ui, sans-serif";
    context.fillText(`${level.toUpperCase()} ROAST`, 76, 340);
    context.fillStyle = "#fffaf0";
    context.beginPath();
    context.roundRect(56, 390, 968, 675, 42);
    context.fill();
    context.fillStyle = "#211914";
    context.font = "600 48px system-ui, sans-serif";
    const words = roast.split(" ");
    const lines = [];
    let line = "";
    words.forEach((word) => {
      const testLine = line ? `${line} ${word}` : word;
      if (context.measureText(testLine).width > 850 && line) {
        lines.push(line);
        line = word;
      } else line = testLine;
    });
    if (line) lines.push(line);
    lines.slice(0, 8).forEach((text, index) => context.fillText(text, 100, 520 + index * 64));
    context.fillStyle = "#fff8ec";
    context.font = "700 30px system-ui, sans-serif";
    context.fillText("RANDOM OFFLINE ROAST · NOT PHOTO ANALYSIS", 76, 1185);
    context.fillText("Would your cat dare? 😹", 76, 1260);
    const link = document.createElement("a");
    link.download = "cat-roasts-you.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    try {
      if (navigator.share && navigator.canShare?.({ files: [new File([await (await fetch(link.href)).blob()], "cat-roasts-you.png", { type: "image/png" })] })) {
        const file = new File([await (await fetch(link.href)).blob()], "cat-roasts-you.png", { type: "image/png" });
        await navigator.share({ title: "CAT ROASTS YOU 🔥", text: roast, files: [file] });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${roast}\n\n— CAT ROASTS YOU 🔥`);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      }
    } catch (error) {
      if (error.name !== "AbortError") console.warn("Sharing the roast card was unavailable.", error);
    }
  };

  const showInterrupt = () => {
    setInterrupt(interruptions[Math.floor(Math.random() * interruptions.length)]);
    window.setTimeout(() => setInterrupt(""), 3800);
  };

  useEffect(() => {
    const interval = window.setInterval(showInterrupt, 25000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className={shake ? "screen-shake" : ""}>
      <div className="page-wrap">
        <header className="topbar">
          <a className="brand" href="#" aria-label="Cat Roasts You home">
            <span className="brand-icon">😼</span><span>CAT ROASTS <i>YOU</i></span>
          </a>
          <div className="top-actions">
            <span className="offline-pill"><span /> OFFLINE ROAST MODE</span>
            <button className="sound-button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}>
              {muted ? <MicOff size={17} /> : <Volume2 size={17} />}<span>{muted ? "SOUND OFF" : "SOUND ON"}</span>
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Flame size={15} fill="currentColor" /> THE INTERNET'S MOST JUDGMENTAL BILLU</div>
            <h1>YOUR SELFIE.<br /><span>HIS PROBLEM.</span></h1>
            <p>Upload a pic. Get roasted by a cat with sunglasses and absolutely no qualifications.</p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={() => fileRef.current?.click()}><Camera size={19} /> {image ? "CHANGE YOUR EVIDENCE" : "SUBMIT YOUR FACE"} <ArrowDown size={16} /></button>
              <button className="text-button" onClick={showInterrupt}><Sparkles size={16} /> Surprise me</button>
            </div>
            <div className="disclaimer"><span>✦</span> Offline mode: roasts are random, not based on your photo. Your selfie stays in your browser.</div>
          </div>
          <div className="hero-art">
            <div className="sunburst" />
            <div className="hero-sticker sticker-top">100%<br />ATTITUDE</div>
            <CatMascot laughing={Boolean(roast && !adopted)} dramatic={scanning} />
            <div className="hero-sticker sticker-bottom"><span>MEOW</span><br />OR ELSE</div>
            <span className="hero-doodle doodle-one">✦</span><span className="hero-doodle doodle-two">✴</span>
            <div className="cat-caption">CEO OF JUDGING<br /><b>since 3am</b></div>
          </div>
        </section>

        <section className="game-card" ref={inputRef}>
          <div className="card-heading">
            <div><span className="step-label">01 / THE ROASTING RITUAL</span><h2>Bring the evidence 📸</h2></div>
            <span className="tag">NO PHOTO ANALYSIS. JUST VIBES.</span>
          </div>
          <div className={`upload-zone ${image ? "has-image" : ""}`} onClick={() => fileRef.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); loadImage(event.dataTransfer.files?.[0]); }} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && fileRef.current?.click()}>
            {image ? <img src={image} alt="Your uploaded selfie preview" className="selfie-preview" /> : <div className="upload-prompt"><span className="upload-icon"><ImagePlus size={27} /></span><strong>Drop your selfie like it's hot</strong><span>or tap to pick a pic · JPG, PNG, GIF · max 12 MB</span></div>}
            <input ref={fileRef} type="file" accept="image/*" onChange={chooseImage} hidden />
            {image && <button className="remove-image" aria-label="Remove selfie" onClick={(event) => { event.stopPropagation(); URL.revokeObjectURL(image); setImage(""); setRoast(""); }}><X size={16} /></button>}
          </div>
          <div className="controls-row">
            <div className="level-picker">
              <span className="control-label">PICK YOUR PAIN</span>
              <div className="level-options">
                {Object.keys(roasts).map((item) => <button key={item} className={`level-button ${level === item ? `selected ${item.toLowerCase()}` : ""}`} onClick={() => setLevel(item)}>{item === "Friendly" ? "🌱" : item === "Savage" ? "🔥" : "☢️"} {item}</button>)}
              </div>
            </div>
            <button className="start-button" disabled={scanning} onClick={() => makeRoast()}>{scanning ? <><span className="spinner" /> SCANNING THE VIBES...</> : <><Flame size={20} fill="currentColor" /> ROAST ME, BILLU</>}</button>
          </div>
          {scanning && <div className="scan-box"><div className="scan-progress"><span /></div><div className="scan-cat"><CatMascot dramatic /></div><p>{scanLines[scanLine]}</p><small>Totally random. The cat can't actually see your photo. 🤫</small></div>}
          {roast && !scanning && <div className={`roast-result ${adopted ? "adopted" : ""}`}>
            <div className="result-topline"><span><Skull size={15} /> {adopted ? "LEGAL ADOPTION NOTICE" : `${level.toUpperCase()} ROAST · RANDOMLY GENERATED`}</span><span className="result-emoji">{adopted ? "🏠" : "😹"}</span></div>
            <blockquote>“{roast}”</blockquote>
            <div className="result-actions">
              <button className="action-button harder" onClick={roastMeHarder}><Flame size={16} /> ROAST ME HARDER</button>
              <button className="action-button" onClick={() => makeRoast()}><RefreshCw size={16} /> GENERATE ANOTHER ROAST</button>
              <button className="action-button" onClick={makeCard}><Share2 size={16} /> {copied ? <><Check size={16} /> COPIED!</> : "SHARE ROAST CARD"}</button>
              <button className={`action-button adopt ${adopted ? "active" : ""}`} onClick={adoptCat}>🐱 CAT, YOU'RE ADOPTED</button>
            </div>
          </div>}
        </section>

        {interrupt && <div className="interrupt-toast"><span>📢 CAT INTERRUPTION</span><p>{interrupt}</p><button aria-label="Dismiss interruption" onClick={() => setInterrupt("")}><X size={14} /></button></div>}

        <section className="battle-card">
          <div className="battle-header"><div className="battle-icon"><Swords size={21} /></div><div><span className="step-label">02 / TALK BACK, COWARD</span><h2>Roast battle arena</h2></div><span className="battle-live"><span /> LIVE</span></div>
          <p className="battle-subtitle">Got something to say to the cat? He's probably not listening. Try anyway.</p>
          <div className="battle-chat">
            <div className="chat-line cat-line"><span className="chat-avatar">😼</span><div><small>THE BILLU</small><p>Come on, impress me. My last nap had better banter. 🥱</p></div></div>
            {battleMessages.map((message, index) => <div key={`${index}-${message.from}`} className={`chat-line ${message.from === "you" ? "you-line" : "cat-line"}`}>
              {message.from === "cat" && <span className="chat-avatar">😼</span>}
              <div><small>{message.from === "you" ? "YOU" : "THE BILLU"}</small><p>{message.text}</p></div>
              {message.from === "you" && <span className="chat-avatar you-avatar">🫵</span>}
            </div>)}
          </div>
          <form className="battle-form" onSubmit={sendBattle}><input value={battleInput} onChange={(event) => setBattleInput(event.target.value)} maxLength={180} placeholder="Roast the cat back... (keep it cute)" aria-label="Your roast for the cat" /><button type="submit" disabled={!battleInput.trim()}><Send size={17} /> SEND</button></form>
        </section>

        <section className="how-section">
          <div className="how-heading"><span className="step-label">THE FINE PRINT (KIND OF)</span><h2>What's actually going on?</h2></div>
          <div className="how-grid">
            <div className="how-item"><span>🎲</span><div><b>Random roasts, always</b><p>No AI vision is connected. We don't analyze your face, outfit, or background.</p></div></div>
            <div className="how-item"><span>🔒</span><div><b>Your selfie stays yours</b><p>Your photo is previewed locally in your browser; it's never uploaded to a server.</p></div></div>
            <div className="how-item"><span>💛</span><div><b>It's all in good fun</b><p>Pick your roast level, share a card, and remember: the cat has zero credentials.</p></div></div>
          </div>
        </section>

        <footer><span>MADE WITH <i>💛</i> & QUESTIONABLE CAT ATTITUDE</span><span>NO CATS WERE CONSULTED. ONE IS VERY UPSET ABOUT IT.</span></footer>
      </div>
    </main>
  );
}

export default App;
