---
title: 3 Things I Learnt From My 8 Month Research Internship
date: "20210603"
image: /public/images/uploads/supercomputer.png
description: After interning under the mentorship of professors and PhD
  candidates, here are some lessons I learnt along the way.
---
![](/public/images/uploads/supercomputer.png)

*[Image Source](https://securityboulevard.com/2020/05/11-plus-supercomputers-hacked-with-cryptominers-by-china/)*

I recently concluded my remote internship with a research group at New Jersey Institute of Technology, headed by Prof. Christian Borcea and Prof. Chen Yi. Under their guidance, I worked on the writing and data experimentation of two papers which are under review: the first is a deep-learning solution to help online publishers deal with ad-blocker users and second is a comparison of the two most common counter-measures to users of ad-blockers. I wrote about the problems of ad-blocking in [another blog post](https://michaelchen.io/blog/why-adblocking-is-so-problematic).

Despite having no prior research experience, I was thrust into the midst of working on university-level research. And frankly, it was intimidating on the beginning. Everyone in the room (or rather, Zoom call) has a PhD or has decades of professional experience in advertising, data science or other relevant field. And I am a high school student. How can I contribute in such an environment?

From this 8 months of learning and successes and failures, I've learnt many valuable lessons, many of which are applicable to working in companies and life in general. So here are some of the things I learnt during my internship.

# Play to strengths, but don't neglect weaknesses

Our group's research centers around data collected in collaboration with Forbes Media. Therefore, data science and econometrics (which is the intersection between economics and statistics) played a crucial role in our experiments. However, while I had data science internships in the past, my technical knowledge is nowhere near that of PhD students and professors I was working with. So this was my weakness. My strength was my ability to digest related literature and come up with interesting research questions and hypotheses. 

For example, we initially evaluated our deep learning strategy to deal with ad blocker users by calculating how it affects a publisher's revenue. Through my readings, I discovered the importance of reader engagement to publishers. If our strategy decreases engagement, a publisher's revenue will suffer in the long run since readers might switch to other news sources. Bearing this in mind, I proposed to evaluate our strategy using both revenue and engagement, which eventually contributed a section to our paper.

Yet weaknesses cannot be neglected. Strengths allow one to contribute something unique to the team and differentiate one from the rest. But deep weaknesses will nonetheless drag one down. To contribute more constructively to our data experiments, I consistently read up on econometrics and other related statistical techniques. At the end of my internship, while I still had much to learn, but I managed to conduct many of the data experiments in the second paper.

# The importance of crafting a narrative

Before my internship, I believed that research was conducting interesting experiments and that research papers are like lab reports. But this couldn't be further from the truth. Data without a story is meaningless. Regardless of the field, all professional papers must contain a narrative or story, which minimally answer the following questions:

1. In what way are these results novel?
2. How do these results fit into the existing literature?
3. Are these results interesting?
4. How can these results be used for practical purposes (especially important for business-related journals)?

Let's say I show that those under 30 years are 50% more likely to use ad-blockers than those older than 30 years and that's it. This begs the question: So what? Why should anyone care that younger people are more likely to use ad-blockers? This statistic is only useful if it has managerial implications and connects to the existing ad blocking literature.

> Data without a story is meaningless.

If academic journals require highly technical research to have a strong narrative, wouldn't this be even more important in a company setting? Being trained in data science and software engineering makes it easy for us to be caught up in technical details and lose sight of the big picture. We should present technical results in the form of narrative when addressing non-technical professionals, rather than using pure statistics. 

# Research is built on failed experiments

I spent an accumulated 5.5 months on data experiments for the second paper. Yet the experiments included in the final paper took me at best 2 weeks. So where did the other 5 months go? Into failures. For example, I wanted to find out how a particular counter-measure to ad-blocking will affect the engagement of users of varying levels of loyalty differently. To answer my question, I spent a whole month studying and experimenting with *cluster analysis*, a data science technique. However, cluster analysis ended up being too unreliable and did not generate interesting results anyways. I ended up abandoning a month worth of work.

Thomas Edison made 1,000 unsuccessful attempts at inventing the light bulb. When asked how it felt failing 1,000 times, Edison beautifully replied: "I didn’t fail 1,000 times. The light bulb was an invention with 1,000 steps.". Edison could not have explained my experience better. Yes, I did not end up using cluster analysis, but it nudged me towards the right statistical technique to answer my question.

> "I didn’t fail 1,000 times. The light bulb was an invention with 1,000 steps."
> ~ Edison

As anyone can imagine, failed experiments can be incredibly discouraging. But it's important to remember that discovering what doesn't work only increases the chance of finding what works.

# Conclusion

Working with highly-talented researchers is a humbling experience. At the same time, the realization that even high school students can contribute to academia also incredibly empowering. I will likely returning to the research group in several months to continue working on these two papers after being reviewed. In the future, I will apply what I've learnt not just in academic settings, but also in commercial projects.