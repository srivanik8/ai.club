import React from 'react' ;
import'./index.css' ;
import './App';


function App() {
  return (
    <>
    <header>
      <img src='https://i.ibb.co/0rKbHp9/logo-white.png' alt='ai.club'></img>
      <a href='/App'>home </a>
      <a href='#board'>board</a>
      <a href='#register'>register</a>
      <a href='#contact'>contact us</a>
    </header>
    <body className="body">
    <br />
    <br />
    <br />
    <br />
    <h1>Advancing together in AI</h1>
    <p>Whether you're a seasoned AI expert or just starting out, this club is for you. We'll be hosting events, workshops, and discussions on all things AI, from the latest advancements to practical applications. 
      Join us and be a part of a vibrant community of passionate individuals who are shaping the future of AI. 
      </p>
      <button><a href='https://discord.gg/Jmy2upSU'>Join US !!</a></button>
    </body>
    <br />
    <div id='board'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>BOARD MEMBERS</h1>
      <div id='rest'>
        <div class="post">
          <img src="https://i.ibb.co/9yJP1pZ/IMG-20231218-113702-2.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Moiz Pasha</h2>
          <h1 className="role">President</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/mbHTNtk/IMG-20231218-095536-2.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Uma Sravani</h2>
          <h1 className="role">General Secretary</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/tzSrxF9/1.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Ashish</h2>
          <h1 className="role">Tech-Lead</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/R3tVFpv/IMG-0272-1-2.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Hemanth Sai</h2>
          <h1 className="role">Treasurer</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/r2NfMLV/Picsart-23-03-31-20-21-36-604.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Prem kiran</h2>
          <h1 className="role">Markrting Lead</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/DQnbVC6/sri2-removebg-preview.png" class="picture" alt='picture'></img>
          <h2 className='name'>Srivani</h2>
          <h1 className="role">Documentation Lead</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/mGFJgy5/1702873224973.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Virija</h2>
          <h1 className="role">Designing Lead</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/bbRjZPM/vidhya.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Vidhya</h2>
          <h1 className="role">Organizing Head</h1>
        </div>

        <div class="post">
          <img src="https://i.ibb.co/yYb5dT1/IMG-20231218-WA0003.jpg" class="picture" alt='picture'></img>
          <h2 className='name'>Venkateshwarlu</h2>
          <h1 className="role">Strategic Lead</h1>
        </div>

        <br />
      </div>
      <div id='register'>
      <h1>Interested? </h1>
      <button><a href='https://lnxok5i37d8.typeform.com/to/w3N5KXrQ?typeform-source=linktr.ee'>Register</a></button>
      </div>

      <div id='contact'>
        <h2>contact us at : aiclub@sreenidhi.edu.in</h2>
        <h2>Follow us on :</h2>
        <div className='icons'>
        <a href='https://www.instagram.com/ai_club_snist/'><img className='small' src='https://static.vecteezy.com/system/resources/previews/018/930/691/non_2x/instagram-logo-instagram-icon-transparent-free-png.png'></img></a>
        <a href='https://twitter.com/ai_club_snist'><img className='big' src='https://i.ibb.co/r0NRT38/twitter.png'></img></a>
        <a href='https://www.linkedin.com/in/ai-club-snist-89a73b2a4/'><img className='small' src='https://i.ibb.co/YNkpycX/linkedin.png'></img></a>
        <a href='https://discord.gg/Jmy2upSU'><img className='big' id='discord' src='https://i.ibb.co/72zjPt2/discord.png'></img></a>
        </div>
        <br />
        <br />
      </div>
    </div>
    </>
  );
}

export default App;
