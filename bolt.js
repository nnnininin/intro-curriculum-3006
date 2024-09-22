'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

const lots = ['大吉', '吉', '中吉', '末吉', '凶'];

app.message(/hello/i, ({ message, say }) => {
  say(`こんにちは！ <@${message.user}>さん`);
});

app.message("おみくじ", ({ message, say }) => {
  say(
    `${lots[Math.floor(Math.random() * lots.length)]}, <@${message.user}>`
  );
});

app.start();
