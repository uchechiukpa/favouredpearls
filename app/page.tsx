'use client'
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header"
import Footer from "./components/footer"
import { useEffect } from "react";

export default function Home() {
  const data = [
    {
      image: "/choice/library-icon.png",
      title: "Fully Equipped Library",
      text: "In Favoured Pearls, we proudly offer our school with a fully equipped library, providing a wealth of resources to enrich your child's educational journey."
    },
    {
      image: "/choice/educators-icon.png",
      title: "Experienced Educators",
      text: "Our school boasts a team of seasoned educators who are not only highly qualified but also adept at creating an engaging and supportive learning environment for every child"
    },
    {
      image: "/choice/classroom-icon.png",
      title: "Condusive Classrooms",
      text: "Each of our classrooms is thoughtfully designed to provide an optimal learning space, promoting focus and collaboration among students."
    },
    {
      image: "/choice/etiquette-icon.png",
      title: "Moral Training and Etiquette",
      text: "We place a strong emphasis on character development, instilling essential values and manners that guide our students' interactions and actions."
    },
    {
      image: "/choice/facilities-icon.png",
      title: "ICT facilities and Support",
      text: "From well-equipped computer labs to dedicated IT assistance, our school is committed to integrating technology seamlessly into the learning journey."
    },
    {
      image: "/choice/extracuriculum-icon.png",
      title: "Extracurricular Activities",
      text: "Beyond academics, our array of extracurricular activities offers students a chance to explore diverse interests and talents, fostering a holistic and balanced education."
    }
  ]

  const values = [
    {
      title: "Principles",
      image: "/values/integrity-icon.png",
      text: "Embracing Integrity & Honesty"
    },
    {
      title: "Excel",
      image: "/values/caring-icon.png",
      text: "Understaning and caring"
    },
    {
      title: "Accountability",
      image: "/values/accountability-icon.png",
      text: "Understaning and caring"
    },
    {
      title: "Respect",
      image: "/values/diversity-icon.png",
      text: "Valuing Diversity and Dignity"
    },
    {
      title: "Loyalty",
      image: "/values/loyalty-icon.png",
      text: "Standing by Each Other's side"
    }
  ]


  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    let delay = 0;
    
    cards.forEach((card: Element) => {
      const cardElement = card as HTMLElement; 
      setTimeout(() => {
        cardElement.style.transform = 'translateY(-100%)';
      }, delay);
      
      delay += 200; // Adjust the delay between each card sliding up
    });
  }, []);
  return (
    <div>
        <Header />
        <section className="home-banner ">
            <div className="container flex flex-col lg:flex-row">
              {/* <div className="flex"> */}
                  <div className="banner-left">
                      <div className="image-overlay pattern-overlay"></div>
                      <div className="banner-content flex flex-col justify-center h-full">
                          <div className="title-divider"></div>
                          <div className="banner-title">
                              <h1>Empowering Tomorrow's Leaders with Top-Tier Education</h1>
                          </div>
                          <div className="banner-text">
                              <p>Favoured pearls is a place to be, A choice to excel is our motto.At Favoured
                                  Pearls we focus on every aspect of eduction to bring our pearls a bright future.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="banner-right">
                      <figure className="banner-img">
                          <div className="image-overlay-oval pattern-overlay"></div>
                          <img src="/headgirl.png" alt="heading"  className="img-overlay"/>
                      </figure>
                  </div>
              {/* </div> */}
            </div>
            <div className="overlay-image pattern-overlay"></div>
          </section>
        <main className="max-w-screen-xl mx-auto">
        <div className="flex lg:flex-row flex-col-reverse  mt-24 ">
          <div className="lg:w-1/2 w-full ">
            <video width="400" height="200" controls className="video-control " >
              <source src="/welcomespeech.mp4" type="video/mp4" />
            </video>
          </div>



          <div className="lg:w-1/2 w-full">
          <div className="title-divider mt-16 md:mt-5 lg:mt-0"></div>
            <h2 className="text-4xl uppercase font-bold text-center">A Welcome Speech <br/>  From Our Proprietor</h2>
            <p className="mt-5 mb-16 lg:mb-0">Our Proprietors welcomes you to favoured pearls,
              favoured pearls school is indeed a great school,
              for the past 17 years we have been providing top-notch educations,
              graduates of favoured pearls school are doing great things because 
              of the strong foundation we have laid. It is by the Lords doing.
            </p>
          </div>
        </div>


          <div className="features pt-48 ">
            <div className="title-divider text-center"></div>
            <h2 className="text-center text-3xl font-bold" >Why Favoured Pearls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 mt-8 ">
              {
                data.map((item) => (
                <div key={item.title} className="flex flex-col items-center justify-center text-center p-4 border-dashed border-2 rounded-2xl card-choices">
                  <Image src={item.image} width="100" height="100" alt={item.title} />

                  <div className="lg:ml-4">
                    <h3 className="py-5 text-lg">{item.title}</h3>
                    <p className="py-3">{item.text}</p>
                  </div>
                </div>
                ))
              }

            </div>
          </div>


          <div>
                <h2 className="text-center text-3xl py-20 font-bold" >Our Core Values</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                      values.map(item => (
                        <div className="bg-purple-800 text-white p-4 rounded-2xl flex flex-col justify-center items-center text-center" key={item.title}>
                            <h3 className="py-2">{item.title}</h3>
                            <Image  src={item.image} width="100" height="100" alt={item.title} className="py-2"/>
                            <p className="py-2">{item.text}</p>
                        </div>
                      ))
                      
                    }
                </div>


          </div>


        


          <section className="home-fact-section ">
                <div className="overlay"></div>
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center ">
                        <div className="lg:w-1/2">
                            <div className="fact-section-head">
                                <div className="title-divider"></div>
                                <h2 className="fact-section-title lg:text-4xl font-bold">Limitless Learning, <br/>Limitless Possibilities !</h2>
                                <p className="fact-section-info pt-5">
                                    Here At Favoured we believe in the limitess height our pearls can reach, we are here to nurture, and help them fly. Foundation is most important part of the building.
                                </p>
                                <div className="fact-list pt-5">
                                    <ul>
                                        <li>Expand Your Knowledge Horizon.</li>
                                        <li>Apply Knowledge in Practical Scenarios.</li>
                                        <li>Set Ambitious Learning Goals.</li>
                                    </ul>
                                </div>
                                <div className="service-btn">
                                <Link href="contact" className="flex justify-center items-center rounded-2xl bg-pink-800 px-4 py-2  text-white lg:w-32">
                                        Join us now
                                </Link>
                                    {/* <Link href="contact" className="button-round-secondary">JOIN US NOW</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="fact-right-inner-wrap">
                                <div className="fact-inner-box">
                                    <div className="fact-content top-left-content">
                                        <div className="pattern-overlay circle-patten"></div>
                                        <h4>A Choice to Excel is our Motto</h4>
                                    </div>
                                    <figure className="fact-image top-right-image"></figure>
                                    <figure className="fact-image bottom-left-image"></figure>
                                    <div className="fact-content bottom-right-content">
                                        <div className="pattern-overlay circle-c-patten"></div>
                                        <h4>Let the dreams of today determine the opportunities of tomorrow.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


          {/* <section className="flex bg-purple-950 he">
              <div className="lg:w-1/2">
                <Image src="/students.jpg" alt="" width={700} height={100}/>                   
              </div>


              <div className="lg:w-1/2">
                  <h2 className="goal-title">Determined to Achieve Our Very Best</h2>
                  <p className="goal-info">We're committed to giving our best. With enthusiasm and support from teachers and parents, we strive for excellence in learning, creating, and playing together. Together, we make our school a place where everyone can shine
                  </p>
                  <a href="/contact" className="button-round-secondary">JOIN US NOW</a>
              </div>


            </section> */}


            <div className="my-48 flex flex-col items-center">
            <div className="title-divider text-center"></div>
              <h2 className="text-center text-4xl font-bold capitalize ">Review's from parents </h2>

              <p className="text-center  text-xl mt-5 lg:w-2/5">Parents' reviews are crucial in shaping our school's ongoing improvements. We highly value their valuable insights and contributions to our community.</p>


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

                  <div className="max-h-72 overflow-auto scrollbar-hide shadow-2xl p-10">

                    <p >
                      My journey at Flavoured pearls has been a beautiful story. I don’t think I could ask for anything more than what the school offers to my kids. I recognize the importance the school places on not just education but the learning centered around the most crucial social unit, the family. It makes the school feel like home. I will recommend this school to any parent looking for that environment that fosters the freedom to learn from all learning indices. The school keeps extending its capacity for growth all the time, showing everyone that there is always room for even more improvement. Most importantly, I can vividly see these growth and improvement cascade into my children’s ability to express what learnings they have earned all through their endeavors.”
                    </p>

                    <div className="flex justify-end mt-5 items-center">
                      <p className="pr-5"> Mr Stephen Oyefeso</p>
                      <Image src="/oyefeso.jpeg" width={50} height={50} alt="mr oyefeso" className="img-full"/>
                    </div>
                  </div>


                  <div className="h-72 overflow-auto scrollbar-hide shadow-2xl p-10 scroll-smooth">

                    <p>
                      Enrolling our children in Favoured Pearls School has been nothing short of a game-changer. The school's commitment to personalized learning has ignited a true passion for education in our children. The vibrant community, with its inclusive ethos, has made every day a joyous adventure. With top-notch facilities and a progressive approach, Favoured Pearls is not just a school, but a launchpad for boundless potential. Our children are thriving, and we couldn't be happier!
                    </p>

                    <div className="flex justify-end mt-5 items-center">
                      <p className="pr-5"> Mrs Nnenna Ugwu</p>
                      <Image src="/mrs_ugwu.JPG" width={30} height={30} alt="mrs ugwu" className="img-full" />
                     
                      
                    </div>
                  </div>
              </div>
            </div>
        </main>
          <Footer/>

    </div>
  );
}
