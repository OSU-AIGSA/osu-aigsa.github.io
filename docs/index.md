---
layout: home
---

# About AIGSA
The goal of the **A**rtificial **I**ntelligence **G**raduate **S**tudent **A**ssociation (AIGSA) at Oregon State University is to connect current, former, and affiliated AI graduate students of the School of Electrical Engineering and Computer Science, and any other graduate students working in the space of Artificial Intelligence. Contact us at [ai.gsa@oregonstate.edu](mailto:ai.gsa@oregonstate.edu).

[<img src="assets/images/twitter_logo.png" width="32">](https://twitter.com/osu_aigsa)&nbsp;&nbsp;&nbsp;[<img src="assets/images/instagram_logo.png" width="32">](https://www.instagram.com/osu_aigsa/)&nbsp;&nbsp;&nbsp;[<img src="assets/images/linkedin_logo.png" width="32" >](https://www.linkedin.com/company/osu-aigsa)

## How do I join?
1. Follow [this link](https://apps.ideal-logic.com/osusee?key=F3T9-25VWY_5878-CZ4R_f7b06f23) to Ideal-Logic and log in with your OSU credentials
2. Fill out and submit the "New Membership" form that opens post-login
3. Wait for an email from AIGSA that an officer has approved your membership request
4. Come chat with us on [Discord!](https://discord.gg/wGrtzFM8sJ)

# Interest Groups

## Application Support (AIASP) - Open for Fall '26
In the Fall 2022 application cycle, we launched the Artificial Intelligence Application Support Program (AIASP), a service run by volunteer graduate students in our school to assist folks historically underrepresented in the field as they apply to AI graduate programs (M.S./Ph.D.) at OSU! You can find more info [here](https://www.aigsa.club/aiasp).

## Recurring Events

This year, we are going to be offering three recurring events as listed below. For more information, go to the Events Schedule and click on the event you are interested in. Hope to see you there!

#### Bi-Weekly Grad Student Talks 
Every other Wednesday from 12-1 in KEC 1001 starting October 1st. 
#### Bi-Weekly Current Events Chat & Dinner
Every other Wednesday from 5-6 in KEC 1114 starting October 8st. 
#### Weekly Coffee & Bagel Study Hours
Every Monday from 10:30-12:30 in KEC 1114 starting September 29th.

## Events Calendar

## Events Calendar

<!-- FullCalendar CSS and JS -->
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js"></script>

<!-- Calendar container -->
<div id="calendar"></div>

<!-- Calendar setup -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      eventDidMount: function(info) {
        // Show location in tooltip when hovering
        if (info.event.extendedProps.location) {
          var tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.location,
            placement: 'top',
            trigger: 'hover',
            container: 'body'
          });
        }
      },
      events: [
        {
          title: 'Coffee & Bagel Study Hours',
          startTime: '10:30:00',
          endTime: '12:00:00',
          daysOfWeek: [1], // Monday
          startRecur: '2025-09-29',
          location: 'KEC 1114'
        },
        {
          title: 'Grad Student Presentations / Tutorials',
          startTime: '12:00:00',
          endTime: '13:00:00',
          daysOfWeek: [3], // Wednesday
          interval: 2,     // every other week
          startRecur: '2025-10-01',
          location: 'KEC 1001'
        },
        {
          title: 'Current Events & Dinner',
          startTime: '17:00:00',
          endTime: '18:00:00',
          daysOfWeek: [3], // Wednesday
          interval: 2,     // every other week
          startRecur: '2025-10-08',
          location: 'KEC 1114'
        }
      ]
    });

    calendar.render();
  });
</script>

<style>
  #calendar {
    max-width: 900px;
    margin: 40px auto;
  }
</style>






For updates on events, and questions, please post in the general channel on the [Discord.](https://discord.gg/wGrtzFM8sJ)

---
