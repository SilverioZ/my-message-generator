🛠️ How It Works

Every time you run the script, it prints one random inspirational quote to the console. Here's the mechanism behind it:


A list of quotes — messages.js stores an array of inspirational strings, like "Believe you can and you're halfway there."
Picking one at random — it calls Math.random(), which returns a decimal between 0 and 1. Multiplying that by the list's length and rounding down with Math.floor turns it into a random valid index into the array:


js   const randomIndex = Math.floor(Math.random() * messages.length);
   return messages[randomIndex];


Printing it — the chosen message is wrapped in quotes and printed with console.log.


There's no database, no API calls, and no state saved between runs — each run is an independent random pick from a fixed list, so you'll see a different (or occasionally repeated) quote each time.
