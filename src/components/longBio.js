import React, { useState } from "react"
import userInterval from "@use-it/interval"
import ShortBio from "./shortBio"
import SOCIAL from "../utils/social"
import { rhythm } from "../utils/typography"

function getAge(dateOfBirth) {
  var msDiff = Date.now() - dateOfBirth.getTime()
  return (msDiff / 31556952000).toFixed(10)
}

const LongBio = () => {
  const [age, setAge] = useState(28)

  userInterval(updateAgeState, 100)

  function updateAgeState() {
    setAge(getAge(new Date(1990, 12, 2)))
  }

  return (
    <div>
      <ShortBio />
      <p>I'm {age} years old right now.</p>
      <p>
        <span role="img">💻</span> I do mobile software development for a
        living. Working in the industry since 2010, I was able to work with
        Maemo, Meego, Android, iOS and currently I'm iOS developer at Pipedrive.
        Because I like learning something new all the time, I'm diving into
        JavaScript and React right now, while also helping to build React Native
        team in our company. You can learn more about projects I participated in
        by visiting my{" "}
        <a href="https://www.linkedin.com/in/haleckis/" target="_blank">
          LinkedIn
        </a>{" "}
        profile.
      </p>
      <p>
        <span role="img">😳</span> I am HSP/introvert. You can learn more about
        living as an HSP and introvert HERE. It took me a while to identify
        myself and learn what does it mean and how to live with this. I believe
        that knowing, understanding and accepting yourself is the key to
        success. My psychotype introduces some challenging situations on a daily
        basis, while also giving me some nice bonuses, and by mastering my own
        Powers and weaknesses I'm able both to work in a team and to lead one.
      </p>
      <p>
        <span role="img">📚</span>I enjoy reading and listening to audiobooks. I
        believe that reading is one of the most beneficial way of spending your
        free time (while listening to audiobooks can be a perfect compliment to
        walking or any physical activities). I'm a huge sci-fi fan, and my
        favorite fiction author is Brandon Sanderson. It's possible to check
        what I'm currently reading or my book ratings/reviews in the best social
        network created by human kind.
      </p>{" "}
      <p>
        <span role="img">🎮</span>I LOVE videogames. It's something I've been
        obsessed with since early childhood and I'm sure that I'm going to be a
        gamer for my whole life. I'm not watching TV series and not seeing a lot
        of movies, because I believe that videogames can be the perfect
        replacement for these activities. While it's incredibly hard to name the
        one game I'm loving the most, I always name Another World as one, since
        I've beaten it too many times. It's not only the state of art by the
        measures of the year 1989 when it was created, but it's also an example
        of how one talented person (name) can build a world and a whole game
        around it, which is very inspiring.
      </p>
      <p>
        <span role="img">🧘‍♀️</span>Meditation and sports changed my life
        recently, and since I discovered how they affect one's life, mindful and
        healthy lifestyle is something I try to actively embrace. Say no to{" "}
        <span role="img">😡</span> and <span role="img">🥐</span>!
      </p>
      <p>
        <span role="img">🎲</span> Magic The Gathering became a huge part of my
        life some time ago. I never expected this game to change how I look at
        my daily life, but it did! I will definitely write about it soon.
        Playing a draft in our local store replaced my mindless Friday evening
        beer consumption in a bar and I'm more than happy about it!
      </p>
      <p>
        <span role="img">🐱</span>oh, and I love cats! Did you know that,
        despite the popular opinion, they love you too? (link)
      </p>
    </div>
  )
}

export default LongBio
