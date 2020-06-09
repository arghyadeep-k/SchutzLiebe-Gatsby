import React from "react"
import "./layout.css"

const HomePagePost = () => (
  <div class="flex-container">
    <div className="post-heading">
      <p>
        The Family Based Kennel from South East Queensland, <br /> Australia.
        &nbsp;
        <img
          src={require("../images/australia-flag-xs.jpg")}
          style={{ width: "6%", height: "6%" }}
          alt=""
        />
      </p>
    </div>
    <div className="post">
      <p>
        We are a small family based kennel, located in South East Queensland. We
        are high end hobbyist breeder, not a commercial breeder. We do not breed
        for profit, nor to make a living from them. First and foremost they are
        our family and their health and welfare is of our utmost priority.
        <br />
        <br />
        <br />
        As an ethical breeder we strive to breed the ideal Rottweiler through
        careful section of our breeding dogs.
        {/* <br /> */}
      </p>
    </div>
    <div className="flex-container-inline">
      <div className='post-inline'>
        <p>
          We ensure that all our breeding dogs go through the following testing: <br /><br />
          <div className="post-bullet-points">
          <ul>
            <li>Hips and Elbow</li>
            <li>Eyes and Mouth</li>
            <li>Juvenile Laryngeal Paralysis &amp; Polyneuropathy (JLPP)</li>
            <li>DNA profiling &amp; Parentage</li>
          </ul>
          </div>
        </p>
        <p>
        <br /><br />
          We have been involved with the breed since 2003 when we purchased our
          first rottweiler, since then we have own multiple Pedigree Rottweilers
          and have a deep appreciation for the breed. Some years later we
          decided that we would love to be able to share the joys of this noble
          breed. We endeavoured to secure quality bloodline that would produce
          true to standard offspring, once we obtained the desired bloodlines,
          we become a registered breeder in 2016 under the prefix of
          SCHUTZLIEBE. 
        </p>
      </div>
      <div className='post-image'>
        <img
          src={require("../images/home-dog.png")}
          style={{ width: "85%" }}
          alt=""
        />
      </div>
    </div>
    <div className="post-footer">
      <p><i>Member of Rottweiler Club of Queensland<br />Member of Dogs Queensland</i></p>
    </div>
  </div>
)

export default HomePagePost
