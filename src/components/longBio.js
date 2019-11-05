import userInterval from "@use-it/interval"
import React, { useState } from "react"
import { socialUrlForKind } from "../utils/social"
import ShortBio from "./shortBio"

function getAge(dateOfBirth) {
  var msDiff = Date.now() - dateOfBirth.getTime()
  return (msDiff / 31556952000).toFixed(8)
}

function getMyCurrentAge() {
  return getAge(new Date(1990, 2, 12))
}

const LongBio = () => {
  const [age, setAge] = useState(getMyCurrentAge)

  userInterval(updateAgeState, 300)

  function updateAgeState() {
    setAge(getMyCurrentAge)
  }

  return (
    <div>
      <ShortBio />
      <p>I'm {age} years old right now.</p>
      <p>
        <span role="img">💻</span> I do mobile software development for a
        living. Working in the industry since 2010, I was able to develop
        software for Maemo, Meego, Android, iOS and currently I'm an iOS/React
        Native developer at Pipedrive. Because I like learning something new all
        the time, I'm diving into JavaScript and React right now, while also
        helping to build React Native team in our company. I was also amongst
        the people who the organized Latvian IT meetup and{" "}
        <a href="https://en.wikipedia.org/wiki/DevTernity_Conference">
          one of the largest conferences in Baltics
        </a>
        . You can learn more about the projects I participated in by visiting my{" "}
        <a href={socialUrlForKind("LinkedIn")}>LinkedIn</a> profile.
      </p>
      <p>
        <span role="img">😳</span> I am HSP/introvert. It took me a while to
        identify myself fully and learn what does it mean and how to live with
        this. I believe that knowing, understanding and accepting yourself is
        the key to success. My psychological type introduces some challenging
        situations on a daily basis, while also giving me some nice bonuses, and
        by mastering my own powers and weaknesses I'm able both to work in a
        team and to lead one. You can learn more about living as an HSP and
        introvert <a href="https://hsperson.com/">here</a>.
      </p>
      <p>
        <span role="img">📚</span> I enjoy reading and listening to audiobooks.
        I believe that reading is one of the most beneficial ways of spending
        your free time (while listening to audiobooks can be a perfect
        complement to walking or any physical activities). I'm a huge sci-fi
        fan, and my favorite fiction author is{" "}
        <a href="https://www.goodreads.com/author/show/38550.Brandon_Sanderson">
          Brandon Sanderson
        </a>
        . It's possible to check what I'm currently reading or my book
        ratings/reviews in the{" "}
        <a href={socialUrlForKind("Goodreads")}>
          the best social network created by humankind.
        </a>
      </p>{" "}
      <p>
        <span role="img">🎮</span> I LOVE videogames. It's something I've been
        obsessed with since early childhood and I'm sure that I'm going to be a
        gamer for my whole life. I'm not watching TV series and not seeing a lot
        of movies, because I believe that videogames can be the perfect
        replacement for these activities. While it's incredibly hard to name the
        one game I'm loving the most, I always name{" "}
        <a href="https://en.wikipedia.org/wiki/Another_World_(video_game)">
          Another World
        </a>{" "}
        as one, since I've beaten it too many times. It's not only the state of
        art by the measures of the year 1991 when it was created, but it's also
        an example of how one talented person can build a world and a whole game
        around it, which is very inspiring.
      </p>
      <p>
        <span role="img">🧘‍♀️</span> Meditation and sports changed my life
        recently, and since I discovered how they affect one's life, a mindful
        and healthy lifestyle is something I try to actively embrace. Say no to{" "}
        <span role="img">😡</span> and <span role="img">🥐</span>!
      </p>
      <p>
        <span role="img">🎲</span>{" "}
        <a href="https://en.wikipedia.org/wiki/Magic:_The_Gathering">
          Magic: The Gathering
        </a>{" "}
        became a huge part of my life some time ago. I never expected this game
        to change how I look at my daily life, but it did! I will definitely
        write about it soon. Playing a draft in our local store replaced my
        mindless Friday evening beer consumption in a bar and I'm more than
        happy about it!
      </p>
      <p>
        <span role="img">🐱</span> ...Oh, and I love cats! Did you know that,
        despite the popular opinion,{" "}
        <a href="https://doi.org/10.1016/j.beproc.2017.03.016">
          they love you too?
        </a>
      </p>
    </div>
  )
}

export default LongBio
