import React, { useState } from "react";
import { Menu } from "antd";

function Description() {
  const [value, setValue] = useState(0);
  const data = [
    `Once upon a time, on Happy Farm, a donkey named Danny was born into a happy family. His mom and dad loved him and did their best to raise him. Until one day, an accident happened. Danny's mom and dad were brutally murdered by robbers while they were out on a trip. Danny became an orphan from then on, when he was only three years old. He turned from a donkey with all the love of his mom and dad to an orphan. Even though he was able to take care of himself, the pain of losing his loved ones made it difficult for him to come out of it, and he has been suffering from depression ever since. He often woke up late at night in his sleep, and during the day he often recalled the happy scenes of his family when his parents were alive, while the status quo only made him even sadder. He no longer interacted with his classmates at school, and when other students were in groups, he was the only one alone. After the death of his parents, he was not happy at Happy Farm.`,
    `There was a highly respected porcelain master on the farm, and everyone called him Porcelain Master. He has a good personal relationship with Danny's parents, and Danny's father used to learn from him. Danny has refused to contact the outside world after losing his parents, until one day the Porcelain Master came to Danny's home. Porcelain Master has always been a very respectable elder for Danny. As traditional Chinese porcelain, blue and white porcelain has been developed for thousands of years, which first appeared in China during the Tang Dynasty (a little more introduction). It is colored porcelain with blue flowers on a white background, considered a representative of the Chinese aesthetic philosophy and the most valuable cultural relic to collect. The master offered to take Danny as his apprentice to make Danny's life more colorful and to increase his contact with the outside world. Danny hesitated for a while and agreed, thinking it might be time for him to pull himself together. From then on, Danny has learned to make porcelain from the master in his spare time, and the humorous master often brought joy to Danny. Danny practiced day after day the making of blue and white porcelain. It was a drizzly day and Danny was making porcelain when he noticed that the porcelain he made today was a little different than usual. The master walked over and was very surprised because Danny made the very sky-crying porcelain. This kind of porcelain was extremely rare, and even experienced masters can not guarantee to make it, while Danny just made it! The porcelain that Danny made was amazing and was of the top quality even for the sky crying porcelain, from which Danny's efforts and talent can be seen. Danny also realized that hard work is the biggest factor of success. It was his practice day after day that he was able to make the sky-crying porcelain. After getting home, Danny placed the porcelain in the most obvious place in his home as a reminder that all success is no accident.`,
    `Bat Donkey has been maintaining the justice of Happy Farm, while Joker is evil. Bat Donkey has been determined to bring Joker to justice, however, Joker is too cunning, and Bat Donkey has been chasing him for years without being able to catch him. This day, great news came from Happy Farm that Bat Donkey finally brought Joker to justice. When Danny heard about it, he went straight to the police station, wanting to talk with the criminal who lost his family at an early age like him and committed all manners of crimes. When he met Joker, Joker told his story. He lost both parents at the age of ten and was ostracized by everyone, so he felt that there were no more people in the world he cared about or who cared about him. From then on, he decided to take revenge on those who had despised him. So he began to set fire, kill and loot and did nothing but evil for several years. Joker even made an invitation to Danny at the end of the conversation, asking him to help him escape from prison and get revenge on others together when he gets out.
Joker said to Danny: I can understand the pain you are suffering. I decided not to put up with it after suffering all these pains. Instead, I chose to live my own way and take revenge on those who despise me. The conversation with Joker made Danny confused again. He spent the last few years torn and self-doubting, with a lot of people despising him. Danny was even moved by the idea Joker proposed, so he found Bat Donkey and raised his doubts. Bat Donkey told Danny that he was a kind-hearted boy who did suffer more than he deserved over the years, but there were still many people in the world who loved him, such as Porcelain Master, who treated him as his own and had always cared for him after the death of his parents. After some enlightenment from Bat Donkey, Danny realized that he was loved and stopped thinking about meeting with Joker.
`,
    `The most famous donkey in Happy Farm is the Wizard Donkey. No one seems to know where and when the wizard Donkey learned magic. It is said that he has lived for thousands of years and has been silently guarding Happy Farm. He is the only donkey on the farm who can use high-level magic. Every three years, Wizard Donkey would hold an apprentice selection ceremony, where he would choose an apprentice among the young donkeys of Happy Farm, and the young donkeys were eager to attend the ceremony. On this day, it was time for the triennial apprentice selection ceremony, and Danny was encouraged by Porcelain Master to attend it. In the ceremony, Wizard Donkey insisted on choosing Danny, who looked ordinary, despite the opposition of his other apprentices. In the following days, Danny learned magic from Wizard Donkey. He was diligent and hardworking, practicing with other apprentices every day, but he was unable to learn the most basic magic. So he was questioned by other apprentices. One day, the wizard donkey called Danny over and said to him, "You have too many distractions in your mind, and you care too much about other people's opinions, which will only interfere with your mind and make it more and more difficult for you to learn magic.” Danny was so enlightened that in the days that followed, he put aside his distractions and concentrated on practicing magic, and finally learned it. The Wizard Donkey granted him the cloak and wand of a magician and cautioned Danny that learning magic is about protecting yourself and protecting others, not hurting them. Danny agreed, resolving to protect the villagers. In the following days, Danny used magic to fight off countless robbers who salivated over the Happy Farm, and he gradually became a great hero in the eyes of the villagers. One day, a group of the most notorious bandits near the farm suddenly attacked the farm, and when they were about to start burning and looting, Danny arrived and used the magic he learned to repel the bandits. After this incident, Danny was proud of his magic to help the villagers. There are many people with power in this world, but not all of them can use their power in the right way. People who have great power are not necessarily strong, and only those who use it in the right way are the real strong ones.`,
    `Danny's favorite anime is Naruto, which he has been watching since he was a kid. Danny has always been obsessed with Ninja and Ninjutsu. One day rumor came from the farm about the legendary master of Ninjutsu. Everyone was saying that there was a donkey who was proficient in Ninjutsu, a master of masters, and had been living in seclusion at the Happy Mountain. He was gonna die recently and was looking for an apprentice who can be his successor and pass on the art of Ninjutsu. Danny was so excited to hear this news that he packed water and dry food that night and planned to visit the master the next day.
The next day, when the chickens in the happy farm just let out their first crow, Danny set out with water and food on his back. After an hour Danny arrived at the foot of the Happy Mountain with the help of the map, but the towering mountain made him want to retreat, as he did not expect the mountain to be so high. But after all, Danny was here, and his enthusiasm for Ninjutsu drove him up the mountain.
This mountain is unusual, very steep and the ground is full of sharp and uneven rocks. In a short time, Danny was already panting and his hooves had been worn out, but he hadn't even reached halfway up the mountain. The idea of giving up took over his heart, but thinking about Chidori, Kagebunsin, Rasengan and other moves, he still walked one step at a time to the top of the mountain. The sun was almost down, and Danny was almost out of the water and dry food. Right here, in the sunset, Danny saw a hut at the top of the mountain, which must be where the master of Ninjutsu lived! So Danny made a mad dash for the hut. The hut was located in the middle of a bamboo forest, and immediately Danny saw a small grave in the bamboo forest with the epitaph "The Last Ninja" written on it. Danny collapsed and sat down on the ground, feeling that all his efforts were in vain.
To give it a try, Danny gently opened the door of the hut. There were only some simple wooden furniture, a hat, a Ninja suit and a long sword. On the wall of the hut was a pair of calligraphy, "A Ninja's path of growth may be fraught with difficulties, but it's also about carrying a heavy load and never giving up hope." On the table was a note: "Young man, when you read this note, I have already passed away. I regret that my Ninjutsu will not be passed on, but if someone can see this note it means that the Ninja spirit has not been lost. Young man, you are a true Ninja, so take my stuff, and carry on the Ninja spirit." Danny read it with tears in his eyes, put on the bamboo hat and Ninja costume and carried the long sword. He gently closed the door and went to the grave of the master and bowed deeply.
Although Danny did not learn the coveted Ninjutsu, he felt that he had gained something more important from today's journey. On the way home, his footsteps became unusually light.
`,
    `Danny liked a girl Kelly in happy middle school, who is beautiful, kind and simple. Although Danny was in love with her, his introverted personality only allowed him to admire his beloved girl from afar, and he never dared to talk to her. One day after school, Danny leaned on the railing of the happy farm to eat carrots, as usual, watching from afar as kelly ran around the Happy Farm for exercise. At that moment, a stylish tony, wearing a green pepe baseball cap, tapped Danny's shoulder behind him, startling Danny, "Hey, man, you got a crush on Kelly, right? I've seen you staring at her for half an hour." Danny stammered and said, "No." Tony obviously saw through it all, "Stop pretending, you're blushing." Danny kept his head down and didn't dare to speak. "Tell you what, don't be a loser. If you like her then go after her. If you don't take action it won't take long for Kelly to date another donkey. After all, it's not a problem for her to find a boyfriend because I heard that many boys like her. Can you bear to see your beloved girl fall in love with someone else?" Danny couldn't sit still when he heard this, "But she won't like me, I'm so ordinary." Danny lowered his head. "Tell you what... You give me two carrots, and I promise you that I'm gonna make you look great."
Tony patted him on the shoulder, and Danny gave him all the carrots in his pocket directly, "A deal."
Tony stuffed the carrots into his pocket and took Danny to his house. Danny was shocked when he came into the room. Rows of colorful clothes were laid out in the living room, just like a warehouse. Tony went into his warehouse and came out with an Enfant Donkey Depreme shirt, "Try it on." Danny put it on, it was just the right size. "I didn't think it would fit you well, the girls nowadays are quite fond of the melancholy style." Tony took out a rose, "tomorrow you will wear my clothes, and then hold a rose to ask Kelly to eat carrots after school. By the way, I just lent you the clothes, you have to return them to me after the date."
Danny came home and put that shirt on and off in front of the mirror. "Hey, Kelly, are you free now? Do you want to have some carrots with me later?" He practiced this phrase over and over again in front of the mirror. It was late at night, but Danny was too excited to sleep. It was not until midnight that he fell asleep with the shirt in his arms.
On the next day, Danny hid the roses in his school bag and went to happy middle school wearing his EDD shirt. Now that Danny has the shirt, he was really confident and dared to make eye contact with Kelly. The school bell finally rang. When the students were almost gone, Danny took out the roses from his school bag, gripped them in his mouth, and walked tremblingly towards Kelly, "Hey, Kelly, are you free now? Do you want to have some carrots with me later" Danny was so excited that his heart was about to jump out, and he blushed and lowered his head. Kelly was a little surprised, and she snickered out when she saw the rose in his mouth, "OK, why not." Danny thought, "Tony really knows this kind of stuff well."

`,
    `When spring came, Happy Middle School organized a spring trip and the principal decided to take all the students to go skydiving. Danny was so afraid of heights that he was already nervous three days before the trip. He was shivering at the thought of jumping from a height of 10,000 miles and couldn't even sleep well the night before the trip.
The day had come. The students gathered at school in the morning and Mr. Donkey, the principal, said, "What a beautiful day. Are you looking forward to the spring trip today?" The students answered with one voice, "Yes!" But Danny was the only one who felt scared among the donkeys, and his hands and feet were cold.
After an hour on the school bus, which was a great ordeal for Danny, everyone arrived at the skydiving site. After getting off the bus, the skydiving instructor gave the students a brief explanation of the skydiving process and safety matters, let them put on the skydiving equipment, and took them to the plane. The students next to him were unusually excited, but Danny couldn’t get excited, especially when the plane took off and left the ground.
The plane reached the proper height. The first one to jump was Kangaroo Kelvin, followed by ape and cow. Soon there were fewer and fewer students on the plane. When it was Danny's turn, he faltered and got up to the hatch, looking at the ground under his feet, with the wind blowing in his face. Danny's legs were suddenly weak, and he took several steps back and said to the coach, "Forget it, I'm not going to jump today because I'm not feeling well." The coach patted him and said, "Young man, look, all the female students in your school dare to jump. You have to learn to get out of your comfort zone. There are times when you don't take risks, and you'll never see the beautiful side of the world. You only live once. If you really feel scared, just close your eyes and take a deep breath."
Danny calmed down a bit after listening, and he once again stood to the hatch, closed his eyes and took the most exciting step in his life. For a moment he just felt the sky spinning and the wind blowing like a sharp knife in his face. His heart was beating so fast and regret filled his heart. After spending the longest 15 seconds of his life, the parachute opened and everything slowed down. Danny slowly opened his eyes and saw the vast land under his feet. The whole Happy Farm was only as big as a bean. He saw the mountains in the distance, woods that he had never reached, and the sea at the far end of the horizon. Danny shouted in the air, exclaiming the beauty of the world. He shouted, "I only live once! So why not?”
`,
    `The students at Happy Middle School are all very friendly and everyone usually helps each other out. However, there is one group of Kangaroos who are the exception. They are uneducated and domineering in the school, and they cause trouble everywhere. When people see them, they usually run away from them.
One day after school, Danny was eating carrots on his way home as usual. Suddenly, he saw a group of Kangaroos walking in front of him, so Danny lowered his head down to avoid them. At that moment, the leading Kangaroo named Kelvin came up to Danny, snatched the carrot from his mouth and said, "You're the donkey Danny who everyone says is depressed, aren't you? I've heard of you. We just got out of school and didn't have anything to eat, so we're a little hungry. If you're smart, give us all the food you have with you, and we'll hold it for you." Danny didn't want to get himself into trouble, but he also didn't want to tell his parents that he had been bullied by his classmates, so he grabbed the carrot back, "No!" Now Kelvin got angry, he exchanged a look with his accomplice and several Kangaroos surrounded him. Kelvin grabbed him by the collar, "Don't be silly."
"Stop it!" A scolding came from not far away. It was Officer Phil from PDCPD, who darted over and pulled Kelvin's group away. "Why is it you guys again? Didn't I had just educated you two days ago! You guys come with me to the police station." Kelvin's group was so scared that they didn't dare to speak, and the flame they had just had disappeared at once. "Young man, I am Officer Phil. What is your name? If there is such a thing in the future, you can come directly to me. Do not feel embarrassed, my position would not allow such a thing to happen! If you need any help, please feel free to contact me. This is my cell phone number." He also hugged Danny after that.
Danny also gave his contact information to Phil, and then went home happily humming a tune with a carrot in his mouth. Although some unpleasant things happened today, it made him feel the warmth and love from others on the Happy Farm.
`,
    `On a sunny morning, the handsome lion Frank was happily playing basketball on the sports court. The lion spun the basketball with one finger and performed three-point shots. Many small animals were applauding. Danny stared at Frank, clenched his fist, trembled and walked up to him and said, "Can Frank teach me how to play basketball?" Frank laughed and said, "Yes!" As the day went by, Danny developed excellent basketball skills. Frank asked him, "What is your dream?" Danny scratched his head, patted the basketball, and said confidently, "My dream is to be a basketball star like you!"
Danny had a strange and long dream at night, dreaming that he was on the bench of the HBA (Happy Basketball Association) All-Star game, and he was the leading shooting guard of the Lakers! Danny, wearing the No. 24 jersey, scored 30 points in the first half of the game without missing a single shot, just like a godsend! But a bored-looking ape wearing the No. 30 jersey in the opposing blue team was also not in the least bit disadvantaged, having a back and forth three-point shootout with Danny! Drop! The second half started right away. A lion wearing jersey No. 23 of Danny’s team came off the bench. He had more proficient basketball skills than Danny and kept pushing inside. Finally, their team won.
"Awards!" Suddenly, the alarm clock rang and Danny woke up. It was just a strange dream!
`,
    `Danny doesn't have many friends. He has always admired those small animals with beautiful patterns on their bodies and desperately wants to make friends with them because he is often rejected by others due to the monotonous blue donkey hair of his body. One day Danny was surprised to see artists painting on their bodies as a variety of animals online. Danny thought: Why can't I paint myself as another animal too, so maybe they will accept me?
So the next day Danny painted himself with a zebra pattern using paint. He turned into a zebra donkey! He walked into the community of zebras with his head held high, and everyone thought that there was a new friend, so they all went to greet him. As everyone crowded around, Danny's white paint was rubbed off to reveal his blue donkey hair. Suddenly someone shouted, "You're not a zebra, you're a donkey!" Everyone was shocked and criticized Danny, saying he was a pervert. They were more reluctant to make friends with him. Danny ran away in a huff.
On the third day, Danny thought he couldn't make the same mistake as yesterday, so he painted himself with a cow pattern and turned into a cow donkey! Soon he arrived at the cow community, and the cows came in a hurry to see the new cow "from another farm", asking, "Why is he so small?" "Why are his ears so big?" "..." They all thought he was a monster and were scared away.
On the fourth day, Danny painted himself with a leopard's mark and turned into a leopard donkey. To his surprise, the leopards were lying on the branches of the trees, ignoring their "new partners", so Danny left on his own in dejection.
On the fifth day, Danny heard that there was a very powerful tiger named Tyger living in Happy Mountain. He thought to himself that if he could make friends with him, everyone would admire him! So he painted himself with the tiger's pattern according to the description on the Internet and went into the mountain alone. Tyger saw a tiger enter the mountain and followed him carefully. Suddenly Tyger roared. Danny looked back and was so scared that he almost fell to the ground. It turned out that the tiger wanted to eat him! He rushed to run out of the mountain and was scared out of his wits.
As soon as Danny returned to Happy Farm, many donkeys who had heard about Danny's amazing experience in the past few days ran up to ask him about the zebra, cow and leopard, with great interest.
Danny had never felt so popular and vowed never to paint himself as another animal again because it was good to keep himself.
`,
    `Danny always felt that his life was very boring, and he envied those little animals who played outside all day long and longed for the world outside Happy Farm. One day, the wizard donkey told Danny, "Danny, you have been practicing for some time, and you have achieved something, but you have not been able to break through your bottleneck. I hope you can go to the outside world, which may give you new gains and experiences." Danny jumped up with joy when he heard that, "Really? Great Master!" The wizard donkey waved his left hand and the hat on top of his own head flew to Danny's head. "This is the magic wizard hat, which can take you anywhere you want to go. Please use it well". The wizard donkey disappeared, leaving only his voice echoing in the room.
Danny was so excited that he said to the wizard's hat, "O wizard's hat, please take me to the most prosperous cities in the world!" The wizard hat moved, and suddenly a portal appeared in front of Danny. Danny was very shocked and stepped inside. He was stunned by the sight of the bustling city, crowded crowds, and high-rise buildings. "Wow, what is that!" The little donkey could not help but exclaim when he saw a statue of the goddess holding a torch towering into the clouds. There are many high-rise buildings, with crowds of people and cars coming and going. It suddenly snowed as a gust of wind blew. Danny felt very cold, so he immediately walked through the portal to the second big city. Here, the sunset shone on the city, palm trees swayed in the breeze, the traffic was not dense, and people laughed and chatted in the street and on the beach. The little donkey felt that time has slowed down. Suddenly there was a flash before his eyes and Danny was in a new city. There was a tall tower in front of him. There were some tall classical buildings, the weather was cloudy, and everyone was wearing coats and scarves holding a cup of coffee walking in the street. Then, Danny came to another busy city with a towering pearl tower among many skyscrapers, with the words "I Luv Sh" on it. There were crowds of people and cars coming and going, neon lights lit up block after block, and many cruise ships slowly sailed on the river. Soon, Danny arrived at the next city and once again he saw the tall tower, but this it was red. Many people were visiting and taking pictures under the tower. The buildings here were not very tall, and a long bridge glowing like a rainbow brought the cities on both sides of the river together, with a very tall snowy mountain in the distant sky. The day trip to the cities was soon over, and Danny had been deeply shocked by the prosperous city outside. He was deeply aware of his own insignificance and realized that people living in this world have to radiate their own light, and he could no longer hang his head down every day like before. He clenched his fist as if he had a more ambitious goal for the future.
`,
    `Since his last trip to the cities, Danny has become more curious about the outside world. He felt very depressed because he had nothing to do on the happy farm. One day, he had a sudden idea to go to space. He learned from his two masters, Wizard Donkey and Porcelain Master that Dr. Donkey, a prestigious scientist in the village, owned a rocket and had been to space several times. So Donkey couldn't wait to find Dr. Donkey and asked if he could take him on a trip to space.
Dr. Donkey said, pointing to a baby donkey in the cradle with his eyes wide open and innocently holding a pacifier, "Although I and your two masters are old friends, the cost of a rocket launch is very large. I'll tell you what, I see that your craft of making ceramics and magic level are quite good now. My grandson is quite intelligent, as long as you are willing to teach him how to make ceramics and learn magic, I will take you to space, as many times as you want!" "No problem, deal!" Danny was very excited, thinking, "I can take Dr. Donkey's grandson as my apprentice, and I can do rockets for free, this is a good deal!" "Then you will come with me." Dr. Donkey then took Danny to the backyard of his house.
Wow, amazing, there was a tall rocket in the backyard of Dr. Donkey's house!
"Can this rocket fly? Can it take us into space?" Danny was stunned because he had never seen a rocket before, let alone this big one.
"Yes, it can take us on a trip to space." Dr. Donkey said confidently, and then introduced the structure of this rocket to Danny: "This is the main engine, this is the booster, this is the combustor tank, this is the oxidizer tank, this is the spacecraft, and this is the fairing ......" Danny was fascinated and looked at Dr. Donkey admiringly, "Wow, Dr. Donkey you are so smart. You know so many things. Can you take me on a trip into space now?"
"Of course, you can, little one. But we have to put on the spacesuit first, otherwise, even if you know about magic, you won't survive a second away from Earth." Dr. Donkey said seriously.
Soon they all put on the fat spacesuits. Danny felt very new and felt like a penguin who could not walk. "Come on, let's visit space." Dr. Donkey said, and then took Danny aboard the rocket.
"10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ignition!" Eh, this rocket really launched, like a stray arrow rushing up into space.
Looking out the window at the flashing white clouds, Danny was so excited that his heart was about to jump out: "Oh. We're going to space!"
Wow, the blue sky and white clouds are so beautiful! An eagle tried hard to fly over the rocket but was left far behind. Oh, this rocket flew too fast. The earth was getting smaller and smaller, with its blue river curving like a thin line. Danny was mesmerized by the beauty of the scenery.
After a short time, the window slowly became blurred and Danny's body floated uncontrollably in the airline cabin. Danny exclaimed, "Dr. Donkey, what's going on? Why is there no light outside all of a sudden? Why am I flying? Are we in danger?" Dr. Donkey said unhurriedly, "We have entered space."
Gradually, the stars began to shine outside the window. Danny first saw the moon, Venus, Mars, and Mercury, which was farther away and smaller in comparison, and then he saw the huge planet Jupiter, next to which was Saturn. Saturn is surrounded by a ring slowly circling around it as if it were a gyroscope, which was amazing! Then came the distant, dark blue Uranus and Neptune. Suddenly, he saw a huge planet in the distance, emitting a blazing light that made people unable to open their eyes. Danny suddenly realized that it was the sun! Various planets that only appear in books were arranged in front of Danny in turn, and Danny was completely stunned by the scene in front of him.
`,
  ];
  const handleClick = (e) => {
    setValue(e.key - 1);
  };
  return (
    <div className="des-container">
      <section id="collection" className="intro">
        <div className="des-introcontainer">
          <Menu
            onClick={handleClick}
            style={{ width: "25%", margin: "0" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            mode="inline"
          >
            <Menu.Item key="1">Opening</Menu.Item>
            <Menu.Item key="2">Porcelain Master</Menu.Item>
            <Menu.Item key="3">Bat Donkey & Joker</Menu.Item>
            <Menu.Item key="4">Wizard</Menu.Item>
            <Menu.Item key="5">Ninja</Menu.Item>
            <Menu.Item key="6">The Pepe Guy (Fashion, Rose)</Menu.Item>
            <Menu.Item key="7">Parachute </Menu.Item>
            <Menu.Item key="8">Kangaroo PDCDC</Menu.Item>
            <Menu.Item key="9">
              Basketball players (Kobe, Jordan, Curry)
            </Menu.Item>
            <Menu.Item key="10">Skin (Zebra, Cow, Leopard, Tiger)</Menu.Item>
            <Menu.Item key="11">City touring</Menu.Item>
            <Menu.Item key="12">Space touring</Menu.Item>
          </Menu>
          <div className="des-introwrapper">
            <div className="des-introcontent">
              <p>{data[value]}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
