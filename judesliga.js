var stories = document.getElementsByClassName("news-story");
var storyHeights = stories.clientHeight;
var maxStoryHeight = Math.max(storyHeights);
stories.clientHeight = maxStoryHeight;
