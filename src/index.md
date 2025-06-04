---
title: Your Name - Portfolio
layout: default.njk
---

<!-- Content is now driven by includes below -->
<section id="welcome" class="py-5 bg-light">
  <div class="container">
{% include "components/welcome.njk" %}
  </div>
</section>

<section id="about" class="py-5">
  <div class="container">
    {% include "components/about.njk" %}
  </div>
</section>

<section id="experience" class="py-5 bg-light">
  <div class="container">
    {% include "components/experience.njk" %}
  </div>
</section>

<section id="education" class="py-5">
  <div class="container">
    {% include "components/education.njk" %}
  </div>
</section>

<section id="examples" class="py-5 bg-light">
  <div class="container">
    {% include "components/examples.njk" %}
  </div>
</section>

<section id="skills" class="py-5">
  <div class="container">
    {% include "components/skills.njk" %}
  </div>
</section>

<section id="certifications" class="py-5 bg-light">
  <div class="container">
    {% include "components/certifications.njk" %}
  </div>
</section>
