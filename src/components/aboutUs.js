import React from "react";
import './about.css';


const AboutUs=()=>{




    return(
        <div className="about">
            <div className="headcnt">
            <div data-intro="This is a button. Click here to perform an action.">
                <div class="heading">
                    <h1>About the Animals Catalog</h1>
                    <p>Welcome to Animals Catalog, your premier destination for discovering and learning about the fascinating world of animals. Whether you are a passionate animal lover, a student seeking information, or simply curious about the diversity of wildlife, our extensive catalog offers a wealth of knowledge and captivating details. </p>
                </div>
                </div>
            </div>

<div class="containers">
    <div class="box-container">
<ul class="cards">
  <li>
    <a href="http://localhost:3000/animals/dogs" class="card">
      <img src="https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Golden Retriever</h3>            
            {/* <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description">The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve game undamaged due to their soft mouths. They are known for their friendly and tolerant attitudes.</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="http://localhost:3000/animals/cats" class="card">
      <img  src="https://t1.pixers.pics/img-c676e9e9/posters-british-shorthair-cat-portrait.jpg?H4sIAAAAAAAAA42PWW6FMAxFtwMSYIdMDgt4v28JKJDwSsukJG1RV9_QVv2rVPnDg-xzfeF1i3byMPot-QDr7NziYZqX3MUu-Dh_-AIrqbHs8nQpEHO1v_kwhv0oasOrWohKKl0ppsru3ebD1YaX4imlI3YAkTfHfGZaTmOEcY3QItOABNKQcVJ6MZL2_VHHZDdng6tbcXJsju1R4RX_xxIwBDk4NqiBHIqB-rbFU2L9S_jCcs7zz_JC_3jUiJW-vKUwr0U2u-ftVDwfjxL-0PyuIV_B7Q6C8gNADAxeo_52F9QiMYM9WkleKE6a-DQpMUwjKuU8Gi6FZKzJKp8zgOrKiQEAAA==" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://cats.com/wp-content/uploads/2020/10/British-shorthair-cat-compressed-1-768x420.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">American Shorthair</h3>            
            {/* <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description">The American Shorthair is a popular breed of domestic cat known for its robust health, friendly demeanor, and easygoing nature. It has a muscular build and a short, dense coat that comes in a variety of colors and patterns.</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="http://localhost:3000/animals/birds" class="card">
      <img src="https://wdfw.wa.gov/sites/default/files/styles/page_body_full_width_4x3_no_crop/public/2019-03/366lpr-cropped.jpg?itok=1tpx3ttX" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://cdn.britannica.com/96/76096-050-8CF14F84/Bald-eagle-snag-Alaska-Kenai.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Bald Eagle</h3>            
            {/* <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description">The Bald Eagle is a bird of prey found in North America and is the national bird and symbol of the United States. It is known for its striking white head and tail feathers, contrasting with its dark brown body and wings. The Bald Eagle has a powerful build, a large hooked beak, and keen eyesight, making it a formidable hunter.</p>
      </div>
    </a>      
  </li>
  
</ul>
</div>
</div>

<div className="sectionsContainer">

<div className="cift">
<div className="aboutSections">
<div className="mision">
    <h4>Our Mission</h4>
    <p>At Animals Catalog, we believe in the power of knowledge and the importance of connecting with the natural world. Our mission is to inspire curiosity and foster a deeper understanding of the incredible species that inhabit our planet. We aim to provide accurate, engaging, and up-to-date information to enhance your appreciation of animals and their environments.</p>
</div>
</div>

<div className="aboutSections">
<div className="offer">
    <h4>What We Offer</h4>
    <p>Comprehensive Catalog: Explore an extensive database of animal profiles, each meticulously researched and beautifully presented. From the majestic mammals of the savannas to the vibrant fish of the coral reefs, our catalog covers a vast array of species across all continents and habitats.</p>
</div>
</div>
</div>

<div className="tek">
<div className="aboutSections">
<div className="Detailed_Information">
    <h4>Detailed Information</h4>
    <p>Each animal profile includes scientific classifications, physical characteristics, habitat descriptions, behavior patterns, diet, and conservation status. We strive to present the most current and reliable information to satisfy your curiosity and educational needs.</p>
</div>
</div>

<div className="aboutSections">
<div className="Stunning_visuals" >
    <h4>Stunning Visuals</h4>
    <p>Our catalog is enriched with high-quality images and videos that bring each animal to life. Witness the grace of a soaring eagle, the stealth of a prowling tiger, and the playfulness of a pod of dolphins through our visually captivating content.</p>
</div>
</div>
</div>

<div className="cift">
<div className="aboutSections">
<div className="Educational_Resources">
    <h4>Educational Resources</h4>
    <p>In addition to our catalog, we offer a range of educational resources including articles, infographics, and interactive features designed to deepen your understanding of the animal kingdom. Whether for personal interest or academic research, our resources are tailored to meet diverse needs.</p>
</div>
</div>

<div className="aboutSections">
<div className="Conservation_Awareness">
    <h4>Conservation Awareness</h4>
    <p>We are committed to raising awareness about the challenges facing wildlife and the importance of conservation efforts. Through our catalog and resources, we highlight the critical issues impacting animals and provide insights into how we can all contribute to protecting and preserving their habitats.</p>
</div>
</div>
</div>

<div className="vision">
<div className="Our_Vision">
    <h4>Our Vision</h4>
    <p>We envision a world where every individual is informed and inspired to appreciate and protect the incredible biodiversity that surrounds us. By offering a rich and accessible repository of animal knowledge, we hope to ignite a sense of wonder and responsibility towards the natural world.
Thank you for visiting Animals Catalog. Join us on this exciting journey of discovery and become a part of a community that values and cherishes the remarkable creatures that share our planet.
Welcome to the world of Animals Catalog – where every animal has a story.</p>
</div>
</div>

</div>
  
</div>
    )
}

export default AboutUs;