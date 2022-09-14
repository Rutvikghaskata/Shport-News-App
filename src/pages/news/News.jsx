import React, { useEffect, useState } from "react";
import moment from "moment";
import "./news.scss";
import { useSelector, useDispatch } from 'react-redux'
import { load, unload } from '../../redux/reducer'

function News() {
  const [news, setNews] = useState([
    {
        "_id": "631f05bec24109aaf89f3fd4",
        "sourceName": "NDTV News",
        "title": "\"Tote Ud Jaate\": Virender Sehwag's Out Of The Box Suggestion After Sri Lanka Wins Asia Cup | Cricket News - NDTV Sports",
        "author": "NDTV Sports Desk",
        "description": "Former India batter Virender Sehwag came up with an out-of-the-box suggestion, saying it would be interesting if teams who lose against a side that hasn't qualified, also end up losing their qualification for the World Cup.",
        "url": "https://sports.ndtv.com/asia-cup-2022/tote-ud-jaate-virender-sehwags-out-of-the-box-suggestion-after-sri-lanka-wins-asia-cup-3336322",
        "urlToImage": "https://c.ndtvimg.com/2022-09/f5fg97i8_sri-lanka-afp-_625x300_12_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-09-12T04:22:54Z",
        "content": "Dasun Shanaka-led Sri Lanka impressed one and all as the side went on to defeat Pakistan by 23 runs in the final to win the Asia Cup for the sixth time. In the final, Sri Lanka were up against it at … [+2811 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd8",
        "sourceName": "NDTV News",
        "title": "Sri Lanka vs Pakistan: Dasun Shanaka Reveals How CSK Inspired Sri Lanka's Asia Cup Final Win vs Paki.. - NDTV Sports",
        "author": "Abhimanyu Bose",
        "description": "Sri Lanka skipper Dasun Shanaka had acknowledged at the toss that his side was up against it having been put in to bat, but had said even then that they could still win.",
        "url": "https://sports.ndtv.com/asia-cup-2022/sri-lanka-vs-pakistan-dasun-shanaka-reveals-how-csk-inspired-sri-lankas-asia-cup-final-win-vs-pakistan-3336181",
        "urlToImage": "https://c.ndtvimg.com/2022-09/0j1rmo6o_sri-lanka-afp-_625x300_12_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-09-12T02:48:45Z",
        "content": "The Asia Cup 2022 in the United Arab Emirates (UAE) saw a heavy trend in the favour of teams chasing, making the toss in the final a crucial one to win. The odds were already in favour of Pakistan wh… [+1451 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd6",
        "sourceName": "YouTube",
        "title": "ICC Men's T20 World Cup 2022 Venues | Bellerive Oval - ICC",
        "author": null,
        "description": "Bellerive Oval first hosted formal cricket matches in 1914, but it wasn’t until 1987 that Cricket Tasmania made the venue their permanent home. The oval has ...",
        "url": "https://www.youtube.com/watch?v=OcaIYNDOCG0",
        "urlToImage": "https://i.ytimg.com/vi/OcaIYNDOCG0/maxresdefault.jpg",
        "publishedAt": "2022-09-12T03:54:05Z",
        "content": null,
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd7",
        "sourceName": "Hindustan Times",
        "title": "Delhi Police's dig at Pak cricketers in road safety tweet- ‘...Dekh ke chalo’ - Hindustan Times",
        "author": "HT News Desk",
        "description": "Earlier, the Delhi Police had tweeted: “Don't hit 'Allow Access' button in suspicious Apps like Virat Kohli hits balls” lauding the former captain of Indian cricket team for his batting skills. | Latest News Delhi",
        "url": "https://www.hindustantimes.com/cities/delhi-news/delhi-police-dig-at-pak-cricketers-in-road-safety-tweet-dekh-ke-chalo-101662954318065.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/09/12/1600x900/WhatsApp_Image_2022-09-12_at_9.22.30_AM_1662954758040_1662954764191_1662954764191.jpeg",
        "publishedAt": "2022-09-12T03:53:49Z",
        "content": "The Delhi Police - known for spreading awareness about cyber crimes, traffic rules and phishing attacks via memes - is at it again. A road safety tweet by the Delhi Police, which is now trending on s… [+1515 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fdb",
        "sourceName": "Insidesport.in",
        "title": "IND vs SA ODI Series: Shikhar Dhawan to lead India against SA in ODIs, India T20 WC Squad to be rested: Follow Live - InsideSport",
        "author": null,
        "description": "IND vs SA ODI Series: Shikhar Dhawan to lead India against South Africa, T20 World Cup bound players to be rested, India vs SouthAfrica Live, IND vs SA LIVE",
        "url": "https://www.insidesport.in/ind-vs-sa-odi-series-shikhar-dhawan-to-lead-india-against-south-africa-t20-world-cup-bound-players-likely-to-be-rested-follow-live-updates/",
        "urlToImage": "https://www.insidesport.in/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-11-at-4.47.18-PM.jpeg?w=809",
        "publishedAt": "2022-09-12T01:41:12Z",
        "content": "IND vs SA ODI Series: India vs SouthAfrica LIVE: An ODI series before T20 World Cup doesn’t seem right. But that is how bilateral…IND vs SA ODI Series: India vs SouthAfrica LIVE: An ODI series before… [+4750 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd9",
        "sourceName": "Tennis World USA",
        "title": "Rafael Nadal “would have a panic attack” if he saw Tiafoe's messy habit, says fan - Tennis World USA",
        "author": "Claudiu Pop",
        "description": "Tennis – Tiafoe’s on-court habit sparked many hilarious reactions.",
        "url": "https://www.tennisworldusa.org/tennis/news/Rafael_Nadal/120324/rafael-nadal-would-have-a-panic-attack-if-he-saw-tiafoes-messy-habit-says-fan/",
        "urlToImage": "https://www.tennisworldusa.org/imgb/122346/rafael-nadal-would-have-a-panic-attack-if-he-saw-tiafoes-messy-habit-says-fan.webp",
        "publishedAt": "2022-09-12T02:20:31Z",
        "content": "After a fan remarked how messy Frances Tiafoe’s bench looked like in the US Open final against Carlos Alcaraz, he made a comparison with Rafael Nadal’s meticulous style of arranging everything, from … [+1754 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fda",
        "sourceName": "India.com",
        "title": "Asia Cup 2022: THIS Pakistan batter beats Virat Kohli as leading run-scorer, Bhuvneshwar Kumar is top wicke... - Zee News",
        "author": "Devadyuti Das",
        "description": "Team India may have missed out on reaching the final of the Asia Cup 2022 in UAE but there was some cheer for Indian cricket fans as they almost managed to top both the run-scoring and wicket-taking charts in the tournament which was won by Sri Lanka. World N…",
        "url": "https://zeenews.india.com/cricket/asia-cup-2022-this-pakistan-batter-beats-virat-kohli-as-leading-run-scorer-bhuvneshwar-kumar-is-top-wicket-taker-mohammad-rizwan-2508839.html",
        "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/09/12/1089130-rizwankohli.jpg",
        "publishedAt": "2022-09-12T02:10:57Z",
        "content": "Team India may have missed out on reaching the final of the Asia Cup 2022 in UAE but there was some cheer for Indian cricket fans as they almost managed to top both the run-scoring and wicket-taking … [+1941 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fdd",
        "sourceName": "India Today",
        "title": "Carlos Alcaraz becomes youngest World No. 1 in men's tennis after maiden Grand Slam crown at US Open 2022 - India Today",
        "author": null,
        "description": "US Open: 19-year-old Carlos Alcaraz became the first teenager to be ranked No. 1 in ATP rankings history after he defeated Casper Ruud in 4 sets in the final in New York for his maiden Grand Slam title.",
        "url": "https://www.indiatoday.in/sports/tennis/story/carlos-alcaraz-us-open-triumph-new-no-1-atp-rankings-1999140-2022-09-12",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/carlosalcarazusopen_0-647x363.jpeg?v9XftUicodyZVTHRvaS_Q.FiX0jzVcCF",
        "publishedAt": "2022-09-12T00:27:46Z",
        "content": "Carlos Alcaraz showed glimpses of what promises to be a glittering career in tennis when he won the US Open crown as a 19-year-old on Sunday, September 11. The Spanish teenager defeated Casper Ruud i… [+2563 chars]",
        "createdAt": "2022-09-12T10:11:10.337Z",
        "updatedAt": "2022-09-12T10:11:10.337Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fdc",
        "sourceName": "YouTube",
        "title": "PARIS SAINT-GERMAIN - STADE BRESTOIS 29 (1 - 0) - Highlights - (PSG - SB29) / 2022-2023 - Ligue 1 Uber Eats Official",
        "author": null,
        "description": "PARIS SAINT-GERMAIN vs STADE BRESTOIS 29 Highlights (1 - 0) in video. Ligue 1 Uber Eats - Season 2022/2023 - Week 7 PARC DES PRINCES - Saturday 10 September ...",
        "url": "https://www.youtube.com/watch?v=UxebB9CAChY",
        "urlToImage": "https://i.ytimg.com/vi/UxebB9CAChY/maxresdefault.jpg",
        "publishedAt": "2022-09-12T01:30:11Z",
        "content": null,
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fe0",
        "sourceName": "Formula 1",
        "title": "Verstappen says maiden Italian GP win continues an ‘amazing year’ as he edges closer to title - Formula 1",
        "author": "F1",
        "description": "Max Verstappen was delighted with his fifth-straight win and first Italian Grand Prix victory as the Red Bull racer spoke about his title chances heading into Singapore.",
        "url": "https://www.formula1.com/en/latest/article.verstappen-says-maiden-italian-gp-win-continues-an-amazing-year-as-he-edges.4E1nDYwY1xptWrmiUli3F2.html",
        "urlToImage": "https://www.formula1.com/content/dam/fom-website/sutton/2022/Italy/Sunday/1422814291.jpg",
        "publishedAt": "2022-09-11T22:28:46Z",
        "content": "Max Verstappen was delighted with his fifth-straight win and first Italian Grand Prix victory as the Red Bull racer spoke about his title chances heading into Singapore.\r\nThe Dutchman led by more tha… [+2308 chars]",
        "createdAt": "2022-09-12T10:11:10.337Z",
        "updatedAt": "2022-09-12T10:11:10.337Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fdf",
        "sourceName": "The Indian Express",
        "title": "Betting site seeks backdoor entry into India through surrogate ads - The Indian Express",
        "author": "Mihir Vasavda",
        "description": "Operating under the banner of a ‘professional sportsblog’ to circumvent the rules, it has launched a marketing blitzkrieg, which, Indian regulators said, could be in 'potential violation' of the country's laws.",
        "url": "https://indianexpress.com/article/sports/cricket/betting-site-seeks-backdoor-entry-into-india-through-surrogate-ads-8145315/",
        "urlToImage": "https://images.indianexpress.com/2022/09/betting.jpg",
        "publishedAt": "2022-09-11T22:32:44Z",
        "content": "During key moments of the Asia Cup tournament that concluded on Sunday, the image of Yuvraj Singh dressed in whites, pumping his fists, flashing a wide smile and holding a bat would flash on the scre… [+6053 chars]",
        "createdAt": "2022-09-12T10:11:10.337Z",
        "updatedAt": "2022-09-12T10:11:10.337Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fde",
        "sourceName": "Barca Blaugranes",
        "title": "Bayern chief sends warning ahead of Barcelona clash - Barca Blaugranes",
        "author": "Gill Clark",
        "description": "‘We need to play much better’",
        "url": "https://www.barcablaugranes.com/barcelona-uefa-champions-league/2022/9/12/23347764/bayern-chief-sends-warning-ahead-of-barcelona-clash",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/atNCrQELqMnG-QLgFZawvZN6uUA=/0x150:5184x2864/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24013294/1422751644.jpg",
        "publishedAt": "2022-09-11T23:00:00Z",
        "content": "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, LS (select parishes), MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY only.Eligibility restrictions apply. Terms … [+102 chars]",
        "createdAt": "2022-09-12T10:11:10.337Z",
        "updatedAt": "2022-09-12T10:11:10.337Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fe1",
        "sourceName": "Black & White & Read All Over",
        "title": "Juventus 2 - Salernitana 2: Initial reaction and random observations - Black & White & Read All Over",
        "author": "Danny Penza",
        "description": "Just a nice, drama-free night at the stadium!",
        "url": "https://www.blackwhitereadallover.com/2022/9/12/23347700/juventus-salernitana-2022-serie-a-round-6-final-score-result-initial-reaction-random-observations",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/kW00nvTzIqW3Mx7Eb8yM9OQL6VU=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24013682/1243148761.jpg",
        "publishedAt": "2022-09-11T22:00:25Z",
        "content": "No matter the injury absences. No matter the late penalties that end up being saved and then the rebound is scored by the same guy who just saw his PK saved. No matter what you think about it Juventu… [+7356 chars]",
        "createdAt": "2022-09-12T10:11:10.337Z",
        "updatedAt": "2022-09-12T10:11:10.337Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fcf",
        "sourceName": "Icccricketschedule.com",
        "title": "Australia Tour Of India 2022 Schedule, Squad, Venue, Match, Players List, Tickets, Live Streaming & Telecast - ICC CRICKET SCHEDULE",
        "author": "https://www.facebook.com/TechnologyBlogs",
        "description": "This article will lead you through the Australia tour of India 2022 Schedule, Squad, Venue, Match, Players List, Tickets, Live Streaming & Telecast.....",
        "url": "https://www.icccricketschedule.com/australia-tour-of-india-2022-schedule-squad-venue-match-players-list-tickets-live-streaming-telecast/",
        "urlToImage": "https://www.icccricketschedule.com/wp-content/uploads/2020/11/Australia-vs-India-Virat-Kohli-Aaron-Finch.jpg",
        "publishedAt": "2022-09-12T07:21:27Z",
        "content": "Australia tour of India 2022 Schedule, Squad, Venue, Match, Players List, Tickets, Live Streaming &amp; Telecast: Alright! After completing the fifteenth edition of the Asia Cup, now is the time for … [+2370 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd0",
        "sourceName": "YouTube",
        "title": "'Indians, go back': Fans pushed away from Asia Cup final in Dubai; Netizens ask ICC to step in - Hindustan Times",
        "author": null,
        "description": "Indian cricket fans allege they were pushed away from Asia Cup Final. Fans were allegedly turned away from the Dubai International Stadium for 'wearing Team ...",
        "url": "https://www.youtube.com/watch?v=-wWFL62nvm8",
        "urlToImage": "https://i.ytimg.com/vi/-wWFL62nvm8/maxresdefault.jpg",
        "publishedAt": "2022-09-12T06:17:05Z",
        "content": null,
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd1",
        "sourceName": "India.com",
        "title": "Not Rohit Sharma; Shikhar Dhawan Likely to Lead India as T20 WC Players May be Rested - Report - India.com",
        "author": "India.com Sports Desk",
        "description": "Ind vs Aus: The team is in all probability going to be announced on Thursday.",
        "url": "https://www.india.com/sports/ind-vs-sa-not-rohit-sharma-shikhar-dhawan-likely-to-lead-india-as-t20-world-cup-players-may-be-rested-report-5626230/",
        "urlToImage": "https://static.india.com/wp-content/uploads/2022/08/Shikhar-Dhawan-Twitter-ICC-3.jpg",
        "publishedAt": "2022-09-12T05:03:00Z",
        "content": "Dubai: In a few days’ time, India takes on South Africa in a bilateral T20I series at home. Reports in ANI suggest that regular captain Rohit Sharma would not be leading the side and instead Shikhar … [+1575 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd2",
        "sourceName": "India.com",
        "title": "Mohammed Shami to Jasprit Bumrah: TOP contenders to make COMEBACK for T20 World Cup 2022, in PICS - Zee News",
        "author": "Zee Media Bureau",
        "description": "",
        "url": "https://zeenews.india.com/photos/sports/mohammed-shami-to-jasprit-bumrah-top-contenders-to-make-comeback-for-t20-world-cup-2022-in-pics-2508902",
        "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/09/12/1089182-galleryshamilead.jpg",
        "publishedAt": "2022-09-12T05:03:00Z",
        "content": null,
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd3",
        "sourceName": "Cricbuzz",
        "title": "Saqlain Mushtaq defends Rizwan's batting approach in final | Cricbuzz.com - Cricbuzz",
        "author": null,
        "description": "In a high-pressure chase of 170, the Pakistan opener scored a 49-ball 55 that left the rest of the batters with too much to do",
        "url": "https://www.cricbuzz.com/cricket-news/123804/saqlain-mushtaq-defends-rizwans-batting-approach-in-final-cricbuzzcom",
        "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c242833/his-method-is-not-bad-saqlain-mushtaq.jpg",
        "publishedAt": "2022-09-12T04:45:03Z",
        "content": "Before the summit clash of Asia Cup 2022 between Sri Lanka and Pakistan, only one team in the tournament had won in Dubai after losing the toss and being inserted into bat. However, in the final, Sri… [+3551 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fce",
        "sourceName": "International Cricket Council",
        "title": "Zimbabwe star creates history by claiming monthly award - ICC Cricket",
        "author": "ICC",
        "description": "Veteran all-rounder Sikandar Raza has created history by becoming the first Zimbabwe player to win the ICC Men's Player of the Month award.",
        "url": "https://www.icc-cricket.com/news/2788373",
        "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/09/12/81f88c2b-0ca8-48d7-a595-a65aca49e7de/Raza.jpg",
        "publishedAt": "2022-09-12T08:06:13Z",
        "content": "Veteran all-rounder Sikandar Raza has created history by becoming the first Zimbabwe player to win the ICC Men's Player of the Month award.Raza beat New Zealand all-rounder Mitchell Santner and Engla… [+2350 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f05bec24109aaf89f3fd5",
        "sourceName": "Chess.com",
        "title": "Firouzja Wins Sinquefield Cup & The Grand Chess Tour - Chess.com",
        "author": "Carsten Hansen",
        "description": "After nine eventful rounds of play and lots of surrounding tumult, the 2022 Sinquefield Cup came to a conclusion on Sunday in Saint Louis. After four draws in the regulation games of round nine, a play-off, consisting of two rapid games, between GMs Ian Nepom…",
        "url": "https://www.chess.com/news/view/firouzja-wins-2022-sinquefield-cup",
        "urlToImage": "https://images.chesscomfiles.com/uploads/v1/news/1106153.6e21c40d.5000x5000o.f478561391fb.png",
        "publishedAt": "2022-09-12T04:13:00Z",
        "content": "After nine eventful rounds of play and lots of surrounding tumult, the 2022 Sinquefield Cup came to a conclusion on Sunday in Saint Louis.\r\nAfter four draws in the regulation games of round nine, a p… [+13403 chars]",
        "createdAt": "2022-09-12T10:11:10.336Z",
        "updatedAt": "2022-09-12T10:11:10.336Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab49b",
        "sourceName": "News18",
        "title": "India T20 World Cup 2022 Team Announcement Live Updates: Will Mohammad Shami, Sanju Samson be the Surprise - News18",
        "author": "Cricketnext Staff",
        "description": "Check all the live updates and latest developments from Indian team selection for T20 World Cup 2022 for Asutralia which is expected to be announced today",
        "url": "https://www.news18.com/cricketnext/news/india-team-t20-world-cup-2022-announced-live-score-breaking-news-squad-selection-selectors-latest-updates-misses-out-virat-kohli-rohit-sharma-today-afternoon-livenews-5939305.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/09/bhuvnshwar-kuamr-166296545316x9.jpg",
        "publishedAt": "2022-09-12T10:11:37Z",
        "content": "of the Supr4 stage after losses to Pakistan and eventual winners, Sri Lanka. India’s team came under scrutiny for their experimentation in playing XI throughout the tournament.With Doubts Over Jaspri… [+3421 chars]",
        "createdAt": "2022-09-12T11:26:24.148Z",
        "updatedAt": "2022-09-12T11:26:24.148Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab49c",
        "sourceName": "NDTV News",
        "title": "PCB Chief Ramiz Raja Snaps At Indian Journalist After Asia Cup Final Loss. Watch - NDTV Sports",
        "author": "NDTV Sports Desk",
        "description": "This was Sri Lanka's sixth Asia Cup title. Pakistan's capitulation against Lankans in both the final and the Super 4 clash left Pakistani fans distressed and sad.",
        "url": "https://sports.ndtv.com/asia-cup-2022/pcb-chief-ramiz-raja-snaps-at-india-journalist-after-asia-cup-final-loss-watch-3337152",
        "urlToImage": "https://c.ndtvimg.com/2022-06/3ajgljbg_ramiz-raja-new_625x300_24_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-09-12T09:44:25Z",
        "content": "Pakistan tasted a second straight humbling at the hands of Sri Lanka and this time it was in the final of Asia Cup 2022. Babar Azam's team failed to drive home the advantage in the summit clash in Du… [+1534 chars]",
        "createdAt": "2022-09-12T11:26:24.148Z",
        "updatedAt": "2022-09-12T11:26:24.148Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab49d",
        "sourceName": "The Times of India",
        "title": "Urvashi Rautela responds to Pakistani bowler Naseem Shah's 'don't know her' comment, actress unfollows the pacer - Times of India",
        "author": null,
        "description": "Bollywood diva Urvashi Rautela recently got trolled after she shared a romantic fan-made Instagram reel featuring Pakistani cricketer Naseem Shah from India and Pakistan's first match in Asia Cup in August. Now, Urvashi reacted to the video and clarified, 'a …",
        "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/urvashi-rautela-responds-to-pakistani-bowler-naseem-shahs-dont-know-her-comment-actress-unfollows-the-pacer/videoshow/94149151.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/94149151/size-38006/94149151.jpg",
        "publishedAt": "2022-09-12T08:31:59Z",
        "content": "Bollywood\r\n diva Urvashi Rautela\r\n recently got trolled after she shared a romantic fan-made Instagram reel featuring Pakistani cricketer Naseem Shah\r\n from India and Pakistan's first match in Asia C… [+440 chars]",
        "createdAt": "2022-09-12T11:26:24.149Z",
        "updatedAt": "2022-09-12T11:26:24.149Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab4a2",
        "sourceName": "Google News",
        "title": "‘Frustrated’ Ramiz Raja tries to snatch phone of Indian journalist over question about Pakistan’s loss in Asia Cup, watch video - OpIndia",
        "author": null,
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiXmh0dHBzOi8vd3d3Lm9waW5kaWEuY29tLzIwMjIvMDkvYXNpYS1jdXAtcmFtaXotcmFqYS12aXJhbC12aWRlby1mYW4tYXR0YWNrLXNyaS1sYW5rYS1wYWtpc3Rhbi_SAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-09-12T04:47:42Z",
        "content": null,
        "createdAt": "2022-09-12T11:26:24.149Z",
        "updatedAt": "2022-09-12T11:26:24.149Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab4a1",
        "sourceName": "Cricketaddictor.com",
        "title": "RUB vs EME Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- KCA Women's T20 Challengers - Cricket Addictor",
        "author": "More by Vicky Singh",
        "description": "RUB vs EME Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- KCA Women’s T20 Challengers",
        "url": "https://cricketaddictor.com/fantasy-cricket/rub-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers/",
        "urlToImage": "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/KCA-.jpg",
        "publishedAt": "2022-09-12T05:31:07Z",
        "content": "RUB vs EME Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of KCA Womens T20 Challengers matches between Team Ruby and Team Emerald.\r\nRUB vs EME KCA Wo… [+4054 chars]",
        "createdAt": "2022-09-12T11:26:24.149Z",
        "updatedAt": "2022-09-12T11:26:24.149Z",
        "__v": 0
    },
    {
        "_id": "631f17605b3281480bcab4a0",
        "sourceName": "Barca Blaugranes",
        "title": "How will Barcelona line up against Bayern Munich in the Champions League? - Barca Blaugranes",
        "author": "Renato Gonçalves",
        "description": "Time for the first major test of the season for Xavi’s men",
        "url": "https://www.barcablaugranes.com/barcelona-uefa-champions-league/2022/9/12/23347892/how-will-barcelona-line-up-against-bayern-munich-champions-league-2022",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Rh3HG2o01FpE6W_2SBVUhmqKkZ8=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24013651/1422750574.jpg",
        "publishedAt": "2022-09-12T07:00:00Z",
        "content": "Barcelona put their unbeaten start to the season on the line when they travel to Germany for the first major test of this campaign as they meet German champions Bayern Munich in their second Champion… [+3183 chars]",
        "createdAt": "2022-09-12T11:26:24.149Z",
        "updatedAt": "2022-09-12T11:26:24.149Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3ca8",
        "sourceName": "Hindustan Times",
        "title": "'Can't compare Rohit with Babar, Rizwan. Unki fitness Kohli se adhi bhi ho...' - Hindustan Times",
        "author": "HT Sports Desk",
        "description": "At present, Rizwan and Babar may have secured the top two positions in ICC Men's T20I Batting Rankings, but former skipper Salman Butt refused to compare the duo with India's Rohit Sharma. But said Rohit would be on par with South African great AB de Villiers…",
        "url": "https://www.hindustantimes.com/cricket/cant-compare-rohit-sharma-with-babar-azam-rizwan-unki-fitness-virat-kohli-se-adhi-bhi-ho-ex-pakistan-captain-s-bold-remark-101662993221120.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/09/13/1600x900/ANI-20220904205-0_1663033482974_1663033482974_1663033512650_1663033512650.jpg",
        "publishedAt": "2022-09-13T01:47:16Z",
        "content": "Mohammad Rizwan top-scored for Pakistan with 55 off 49 balls in Sunday's Asia Cup final but his traditional approach didn't seem suitable for the chase, as Sri Lanka coasted to a 23-run win to claim … [+2570 chars]",
        "createdAt": "2022-09-13T04:39:32.029Z",
        "updatedAt": "2022-09-13T04:39:32.029Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3ca9",
        "sourceName": "Cricketaddictor.com",
        "title": "India Squad For T20 World Cup 2022 Announced; Mohammed Shami Back In The Reserves - Cricket Addictor",
        "author": "More by Vikas Singh Derek",
        "description": "India Squad For T20 World Cup 2022 Announced; Mohammed Shami Back In The Reserves",
        "url": "https://cricketaddictor.com/icc-t20-world-cup-2022/india-squad-for-t20-world-cup-2022-announced-mohammed-shami-back-in-the-reserves/",
        "urlToImage": "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/India-T20-World-Cup-2022-Squad.png",
        "publishedAt": "2022-09-13T01:19:12Z",
        "content": "BCCI on Monday announced the India squad for ICC T20 World Cup 2022. The tournament is set to commence next month. The tournament will commence on October 16 with the qualifier matches. The T20 World… [+4655 chars]",
        "createdAt": "2022-09-13T04:39:32.029Z",
        "updatedAt": "2022-09-13T04:39:32.029Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3caa",
        "sourceName": "Managing Madrid",
        "title": "Monday Musings: Real Madrid are sitting on a mountain of cash - Managing Madrid",
        "author": "Matt_Wiltse",
        "description": "Florentino Perez once again provides a lesson in economic management to the rest of the global sports industry.",
        "url": "https://www.managingmadrid.com/2022/9/12/23349684/monday-musings-real-madrid-are-sitting-on-a-mountain-of-cash",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ddtdr-VfpAtoQfuGm4qgn08Qmmw=/0x513:4896x3076/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24017101/585865728.jpg",
        "publishedAt": "2022-09-12T21:35:51Z",
        "content": "Matts Monday Musings: A series with no rhyme or reason just consistent thoughts on all things Real Madrid released every Monday. Some weeks may be long form, others just short anecdotal thoughts. Eit… [+3866 chars]",
        "createdAt": "2022-09-13T04:39:32.029Z",
        "updatedAt": "2022-09-13T04:39:32.029Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3cac",
        "sourceName": "NDTV News",
        "title": "Beating Rafa And Djokovic In Madrid Was Unbelievable: World No. 1 Carlos Alcaraz To NDTV - NDTV Sports",
        "author": "NDTV Sports Desk",
        "description": "Carlos Alcaraz wrote his name in history books on Sunday night when he claimed his maiden Grand Slam title at the US Open to become the youngest man to rise to the world no. 1 ranking.",
        "url": "https://sports.ndtv.com/us-open-2022/carlos-alcaraz-us-open-champion-and-world-no-1-tennis-player-speaks-to-ndtv-3338696",
        "urlToImage": "https://c.ndtvimg.com/2022-09/pep8lh0g_carlos-alcaraz_625x300_12_September_22.jpg",
        "publishedAt": "2022-09-12T17:33:00Z",
        "content": "Spanish teenager Carlos Alcaraz wrote his name in history books on Sunday night when he claimed his maiden Grand Slam title at the US Open to become the youngest man to rise to the world no. 1 rankin… [+2433 chars]",
        "createdAt": "2022-09-13T04:39:32.029Z",
        "updatedAt": "2022-09-13T04:39:32.029Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3cad",
        "sourceName": "ESPN Cric Info",
        "title": "Mark Boucher to stand down as South Africa coach after T20 World Cup - ESPNcricinfo",
        "author": "Firdose Moonda",
        "description": "CSA confirm departure in wake of Test series loss to England",
        "url": "https://www.espncricinfo.com/story/south-africa-news-mark-boucher-to-stand-down-as-south-africa-coach-after-t20-world-cup-1334407",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/306500/306590.6.jpg",
        "publishedAt": "2022-09-12T17:24:30Z",
        "content": "NewsCSA confirm departure in wake of Test series loss to England\r\nMark Boucher will leave the South Africa head coach role after the T20 World Cup  •  Getty Images\r\nMark Boucher will leave his role a… [+5132 chars]",
        "createdAt": "2022-09-13T04:39:32.029Z",
        "updatedAt": "2022-09-13T04:39:32.029Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3cae",
        "sourceName": "India Today",
        "title": "Sri Lanka have given a tight slap: Sunil Gavaskar fumes over India vs Pakistan hype in Asia Cup 2022 - India Today",
        "author": null,
        "description": "Sunil Gavaskar has hit out at the Indian team for their loss in the Asia Cup. Speaking to India Today Gavaskar said that India's goal should be to win the World Cup and not just to beat Pakistan.",
        "url": "https://www.indiatoday.in/sports/cricket/story/sri-lanka-have-given-a-tight-slap-sunil-gavaskar-fumes-over-india-vs-pakistan-hype-in-asia-cup-2022-1999499-2022-09-12",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Pakistan_vs_India_Reuters_1_0-647x363.png?NPVF8NC5W02tkK0Io5jByGRB7H4NGAus",
        "publishedAt": "2022-09-12T17:10:33Z",
        "content": "Former India captain Sunil Gavaskar has hit out at the hype of India vs Pakistan during the Asia Cup. Speaking to India Today, Gavaskar said that Sri Lanka have served a timely reminder to the Indian… [+1729 chars]",
        "createdAt": "2022-09-13T04:39:32.030Z",
        "updatedAt": "2022-09-13T04:39:32.030Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3cb1",
        "sourceName": "Hindustan Times",
        "title": "‘Asif Ali played with stitches, Shadab Khan batted despite being concussed’ - Hindustan Times",
        "author": "HT Sports Desk",
        "description": "Pakistan's star finisher Asif Ali, who is renowned for his attacking batting was dismissed on a golden duck as Pakistan failed to complete the 171-run chase. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/asif-ali-played-with-stitches-shadab-khan-batted-despite-being-concussed-pakistan-coach-reveals-after-asia-cup-final-defeat-101662992464234.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/09/12/1600x900/CRICKET-ASIACUP--42_1662996575391_1662996575391_1662996600305_1662996600305.JPG",
        "publishedAt": "2022-09-12T15:33:55Z",
        "content": "Pakistan endured a 23-run defeat against Sri Lanka in the Asia Cup 2022 finale, a contest which saw the Babar Azam and co collapse from 99/3 to 147 all-out. Their star finisher Asif Ali, who is renow… [+1524 chars]",
        "createdAt": "2022-09-13T04:39:32.030Z",
        "updatedAt": "2022-09-13T04:39:32.030Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3cb0",
        "sourceName": "Barca Blaugranes",
        "title": "Bayern Munich is Barcelona’s measuring stick once again - Barca Blaugranes",
        "author": "Luis Mazariegos",
        "description": "Frequent tests against the Bavarians chart the progress of the team",
        "url": "https://www.barcablaugranes.com/2022/9/12/23348896/bayern-munich-is-barcelonas-measuring-stick-once-again",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/474Ry4__FwE4Rnt_qgecsRIlDxM=/0x216:4000x2310/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24015319/1422750574.jpg",
        "publishedAt": "2022-09-12T15:41:00Z",
        "content": "Barcelona against Bayern Munich. Its become a recurring theme now, as the UEFA Champions League rolls along, for the two to face off. In better times for the Catalans, they defeated Bayern 4-0 in the… [+1749 chars]",
        "createdAt": "2022-09-13T04:39:32.030Z",
        "updatedAt": "2022-09-13T04:39:32.030Z",
        "__v": 0
    },
    {
        "_id": "632009840c9e1e5c317a3caf",
        "sourceName": "90min",
        "title": "Premier League confirms resumption with 7 of 10 scheduled games - 90min UK",
        "author": "Jude Summerfield",
        "description": "Premier League has confirmed its resumption with seven of the scheduled ten games set to take place.",
        "url": "https://www.90min.com/posts/premier-league-confirms-resumption-scheduled-games",
        "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3088,h_1737,x_1142,y_257/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01gcs8v0t8gegwn127jt.jpg",
        "publishedAt": "2022-09-12T16:38:19Z",
        "content": "The Premier League has confirmed it will resume this weekend, though three of the scheduled ten fixtures have been postponed due to events surrounding The Queens funeral.\r\nFootball across England and… [+2039 chars]",
        "createdAt": "2022-09-13T04:39:32.030Z",
        "updatedAt": "2022-09-13T04:39:32.030Z",
        "__v": 0
    },
    {
        "_id": "63216e7dde8ba3b725e72cb7",
        "sourceName": "NDTV News",
        "title": "\"Pehle Se Hi Tay Kar Diya?\": Sunil Gavaskar Angry With 'Harshal Will Get Hit In Australia' Comment | Cricket News - NDTV Sports",
        "author": "NDTV Sports Desk",
        "description": "Sunil Gavaskar had a stern reply to a fan who suggested that Harshal Patel will go for runs in the 2022 T20 World Cup.",
        "url": "https://sports.ndtv.com/t20-world-cup-2022/pehle-se-hi-tay-kar-diya-sunil-gavaskar-angry-with-harshal-will-get-hit-in-australia-comment-3342434",
        "urlToImage": "https://c.ndtvimg.com/2022-06/e53ulck_harshal-patel_625x300_14_June_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-09-14T02:56:08Z",
        "content": "While the Indian cricket team squad for the 2022 T20 World Cup bears a tried and tested look, there were a couple of omissions which stuck out for some experts. Former Indian cricket team player and … [+1867 chars]",
        "createdAt": "2022-09-14T06:02:37.301Z",
        "updatedAt": "2022-09-14T06:02:37.301Z",
        "__v": 0
    },
    {
        "_id": "63216e7dde8ba3b725e72cb8",
        "sourceName": "Hindustan Times",
        "title": "‘Had MS Dhoni given me a chance, I would’ve done well for India': Ex-CSK star - Hindustan Times",
        "author": "HT Sports Desk",
        "description": "A former Chennai Super Kings player has revealed that had MS Dhoni shown more trust in him, he could have gone on and played for the Indian team. | Cricket",
        "url": "https://www.hindustantimes.com/entertainment/others/-had-ms-dhoni-given-me-a-chance-my-career-would-ve-turned-out-differently-former-csk-player-ishwar-pandey-after-announcing-retirement-101663076089688.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/09/13/1600x900/dhoni-ipl-getty_1663086696847_1663086702253_1663086702253.jpg",
        "publishedAt": "2022-09-14T01:44:55Z",
        "content": "Under MS Dhoni, several players went on to play for India and some didn't. Dhoni was responsible for a number of promising players realising their dream of playing for the Indian team. Even as captai… [+2086 chars]",
        "createdAt": "2022-09-14T06:02:37.302Z",
        "updatedAt": "2022-09-14T06:02:37.302Z",
        "__v": 0
    }
]);
  const [filterData, setFilterdData] = useState(news);

  const isLoading = useSelector((state) => state.loading.isLoading)
  const dispatch = useDispatch()

  // const getNews = () => {
  //   fetch("http://192.168.1.147:4000/LiveNews")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const filteredData = data.sort(
  //         (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  //       );
  //       setNews(filteredData);
  //       setFilterdData(filteredData)
  //     })
  //     .catch((err) => console.log(err.message));
  // };
  // useEffect(() => {
  //   getNews();
    
  // }, []);

  const onFilter = (author) => {
    dispatch(load());
    setTimeout(() => {
      dispatch(unload()); 
      const filteredData = news.filter((data)=>{
      return data.author===author
    })
    setFilterdData(filteredData)
    },2000)
  }

  const handleLoading = () => {
    dispatch(load());
    setTimeout(() => {
      dispatch(unload());
    },2000)
  }

  return (
    <div className="container">
      <h1>News-App</h1>
      <div className="header-btn">
      <button className="filter-btn" onClick={()=>setFilterdData(news)}>ALL</button>
      <button className="filter-btn" onClick={()=>onFilter("NDTV Sports Desk")}>NDTV Sports Desk</button>
      <button className="filter-btn" onClick={()=>onFilter('HT News Desk')}>HT News Desk</button>
      <button className="filter-btn" onClick={()=>onFilter('Abhimanyu Bose')}>Abhimanyu Bose</button>
      <button className="filter-btn" onClick={()=>onFilter('Claudiu Pop')}>Claudiu Pop</button>
      <button className="filter-btn" onClick={handleLoading}>Loading</button>
      </div>
      <div className="news-container">
        {filterData.length >= 1 ? (
          filterData.map((data, index) => (
            <>
              {data.urlToImage !== null ? (
                <div key={index}>
                  <img
                    src={data.urlToImage}
                    alt={"news-image"}
                    className="news-image"
                  />
                  <h2 className="news-title">{data.title}</h2>
                  <span className="news-description">{data.description}</span>
                  <p className="news-date">
                    {moment(data.publishedAt).fromNow()}
                  </p>
                  <p>{data.author}</p>
                  <div className="news-hr" />
                </div>
              ) : null}
            </>
          ))
        ) : (
          <p>data are not found</p>
        )}
      </div>
    </div>
  );
}

export default News;
// const filtered = news.filter((data) => {
//       return data.sourceName === "NDTV News";
//     });
//     console.log(filtered);
//     setFilterdData(filtered);