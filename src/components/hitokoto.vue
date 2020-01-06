<template>
  <div class="hitokoto">
    <div id="wrapper">
      <div id="quote-box">
        <div class="quote-text">
          <span id="text"></span>
        </div>
        <div class="quote-author">-<span id="author"></span></div>
        <div class="buttons">
          <a
            class="button"
            id="tweet-quote"
            title="Click to jump to Github!"
            href="https://github.com/kikyoluka"
          >
            <img class=icon src=../assets/github.png />
          </a>
          <a
            class="button"
            id="tumblr-quote"
            title="Click to jump to CodePen!"
            href="https://codepen.io/dashboard/"
          >
            <img class=icon src=../assets/codepen.png />
          </a>
          <button class="button" id="new-quote" v-on:click="changeColor">
            New quote
          </button>
        </div>
      </div>
      <div class="footer">
        by <a href="https://codepen.io/dashboard/">kikyo</a>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery-ui";
import "jquery-ui/ui/effect.js";
export default {
  name: "hitokoto",
  data: () => {
    return {};
  },
  methods: {
    getQuotes: function() {
      return $.ajax({
        headers: {
          Accept: "application/json"
        },
        url:
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        success: function(jsonQuotes) {
          if (typeof jsonQuotes === "string") {
            let quotesNum = Math.floor(Math.random() * 102);
            let quotesData = JSON.parse(jsonQuotes).quotes[quotesNum];
            let colors = [
              "#16a085",
              "#27ae60",
              "#2c3e50",
              "#f39c12",
              "#e74c3c",
              "#9b59b6",
              "#FB6964",
              "#342224",
              "#472E32",
              "#BDBB99",
              "#77B1A9",
              "#73A857"
            ];
            let colorNum = Math.floor(Math.random() * 12);

            $(".quote-text").animate({ opacity: 0 }, 500, function() {
              $(this).animate({ opacity: 1 }, 500);
              $("#text").text(quotesData.quote);
            });
            $(".quote-author").animate({ opacity: 0 }, 500, function() {
              $(this).animate({ opacity: 1 }, 500);
              $("#author").html(quotesData.author);
            });

            $("html body").animate(
              {
                backgroundColor: colors[colorNum],
                color: colors[colorNum]
              },
              1000
            );
            $(".button").animate(
              {
                backgroundColor: colors[colorNum]
              },
              1000
            );
          }
        }
      });
    },
    changeColor: function() {
      this.getQuotes();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url(../assets/style.css);

* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
}

div {
  position: relative;
  z-index: 2;
}

body {
  background-color: #333;
  color: #333;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.footer {
  width: 450px;
  text-align: center;
  display: block;
  margin: 15px auto 30px auto;
  font-size: 0.8em;
  color: #fff;
}

.footer a {
  font-weight: 500;
  text-decoration: none;
  color: #fff;
}

#quote-box {
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
}

#quote-box .quote-text {
  text-align: center;
  width: 450px;
  height: auto;
  clear: both;
  font-weight: 500;
  font-size: 1.75em;
}

#quote-box .quote-text i {
  font-size: 1em;
  margin-right: 0.4em;
}

#quote-box .quote-author {
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  text-align: right;
}

#quote-box .buttons {
  width: 450px;
  margin: auto;
  display: block;
}

#quote-box .buttons .button {
  height: 38px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: #333;
  outline: none;
  font-size: 0.85em;
  padding: 8px 18px 6px 18px;
  margin-top: 30px;
  opacity: 1;
  cursor: pointer;
}

#quote-box .buttons .button:hover {
  opacity: 0.9;
}

#quote-box .buttons .button#tweet-quote,
#quote-box .buttons .button#tumblr-quote {
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 5px;
  height: 30px;
  width: 40px;
}

#quote-box .buttons .button#new-quote {
  float: right;
}

.icon {
  margin-top: -5px;
}
</style>
