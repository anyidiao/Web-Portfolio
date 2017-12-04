var data = {
  "plants_vs_zombies": {
    "1": {
      "subtitle": "Planning",
      "content": "I started by choosing the language and module for this project to be Python3 and Pygame module. After doing competitive analysis of the original game, I decided to implement the Day/Night modes in the original game first, and then add a new mode called Dr Zomboss, which allows player to play against an AI zombie robot.",
      "image": "images/background.jpg"
    },"2": {
      "subtitle": "Day mode",
      "content": "I first implemented the Day mode, including 10 plants and 5 zombie characters from the original game. Each plant and zombie character is implemented as a class, with its HP value, attack method and special effects (such as shooting bullets and triggering explosions).",
      "image": "images/daymode.png"
    }, "3": {
      "subtitle": "Night mode",
      "content": "Then I used class inheritance and override to quickly implement the Night mode based on the Day mode class. And added an additional plant specific to Night mode, Sunshroom.",
      "image": "images/nightmode.png"
    },"4": {
      "subtitle": "Dr Zomboss mode",
      "content": "Dr Zomboss is the AI mode which allows player to play against an AI zombie robot. The robot, Dr Zomboss, can plan its own path by calculating the relative combat pointof each row, and release different levels of zombies according to its HP value left.",
      "image": "images/Dr._Zomboss.png"
    }
  }, "ceiling_fan_control": {
    "1": {
      "subtitle": "Planning",
      "content": "I noticed the ceiling fan control in my apartment is a bad design. It provides poor feedforward and feedback. The two pull strings (one for light, another for fan) look exactly the same, which often results in the user pulling the wrong string. When the user wants to turn off the fan from ‘High’ mode, it is hard to tell immediately whether the fan is slowing down to ‘Medium’ mode or turning off by looking at its speed. The pull string doesn’t indicate its current mode either, which often makes the user doubt whether he/she made the right action.",
      "image": "images/ceiling_fan.jpeg"
    },"2": {
      "subtitle": "Competitive analysis",
      "content": "Then I searched online for other ceiling fan controls. Surprisingly, approximately 70% percent of the market uses this two-pull-string control. And it's a common issue that the label on pull string is not indicative of current operating state.",
      "image": "images/ceiling_fan.jpeg"
    }, "3": {
      "subtitle": "Iterations",
      "content": "The first design was based on the original pull-string mechanism. I improved by adding a handle which has label of fan and light. There are arrows point form each label to its corresponding pull string. The label will show its current state (fan: OFF/MEDIUM/HIGH).",
      "image": "images/iteration.jpg"
    },"4": {
      "subtitle": "Final design",
      "content": "In the final design, I replaced the pull-strings with in-wall control. I changed the shape of the rotary switch so that it has three 'fan blades'. The push button for the light sits in the center of the fan control. The shape of a fan offers user perceptual affordance to twist the swith, and good feedforward for what state will be in if the user twists to a certain label.",
      "image": "images/final_design.jpg"
    }
  }
};
