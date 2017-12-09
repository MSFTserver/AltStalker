## 6 branches being worked on for this Website:

##### - [MASTER](https://github.com/MSFTserver/AltStalker)

##### - **Crypto Compare Stats/Rank Page *(Your're Here)***

##### - [Crypto Portfolio](https://github.com/MSFTserver/AltStalker/tree/Portfolio)

##### - **Status Page *(You're Here)***

##### - [Coming Soon Page](https://github.com/MSFTserver/AltStalker/tree/coming-soon)

##### - [API *(Coming Soon)*](https://github.com/MSFTserver/AltStalker/tree/api)

# UptimeRobot Status Page

`UptimeRobot Status Page` is a simple html website that retrieve's [UptimeRobot](https://www.uptimerobot.com "Uptime Robot's Homepage")'s sensors via their API and turns it into a professional service status page .

  - Import's monitor data from UptimeRobot.
  - Extracts monitor IDs that are sorted into each category.
  - Reports current status and recent logs.

### Version
2.0

### Included Projects and Libraries

`UptimeRobot Status Page` uses a number of projects:

* [Cachet.io](https://github.com/CachetHQ/Cachet) - An open source status page system for everyone.
* [Jaco Strauss' Tech Support Excuse Generator](http://www.strauss.za.com/sla/support.asp) - IT excuses for downtime.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [jQuery] - duh

### Installation

`UptimeRobot Status Page` will run on any web-server that is capable of serving the HTML file. It is recommended to host outside of your network for availability.

Save `this repo`

Edit the configuration at the top of the `js/main.js` file.

Add your Monitors' IDs to the `categories` object. You can find your Monitor IDs by clicking on them in the UptimeRobot website and looking at your URL.

Also add your API Key. if you don't want the API-KEY to be Public I suggest using a JavaScript Obfuscator,

I personally use: `http://javascriptobfuscator.herokuapp.com/`

Example: `https://uptimerobot.com/dashboard.php#888246374` The ID for this Monitor is `888246374`.

Upload to Server and Done!


### Images

![](https://cloud.githubusercontent.com/assets/8865327/16458877/c490ebd2-3dee-11e6-956f-871d57679b7c.PNG)

![](https://cloud.githubusercontent.com/assets/8865327/16458880/ca751744-3dee-11e6-8ed9-1940763880c0.PNG)
