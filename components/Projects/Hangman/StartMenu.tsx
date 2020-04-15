import * as React from "react";
import styled from "styled-components";

import { GallowsIcon, HangmanButton } from "components/Projects/Hangman";

const Hangman = () => (
  <svg fill="none" viewBox="0 0 200 41" height="40" className="title">
    <path
      fill="#000"
      d="M1.6 32c-.5 0-.9-.1-1.2-.4-.3-.3-.4-.7-.4-1.2v-28c0-.5.1-1 .4-1.2.3-.3.7-.4 1.2-.4.4 0 .8.1 1 .4.4.3.5.7.5 1.1v12.5h19.5V2.3c0-.4.2-.8.5-1.1.3-.3.6-.4 1.1-.4.5 0 .8.1 1.1.4.3.3.5.7.5 1.1v28.1c0 .5-.2.9-.5 1.2-.3.3-.6.4-1.1.4-.5 0-.8-.1-1.1-.4-.3-.3-.5-.7-.5-1.2V17.6H3.1v12.8c0 .5-.1.9-.4 1.2-.3.3-.7.4-1.1.4zm41.4.2a10.7 10.7 0 01-9.4-5.4c-1-1.7-1.4-3.6-1.4-5.7 0-2.2.5-4 1.4-5.7a11 11 0 019.7-5.4 10.8 10.8 0 019.6 5.4c1 1.6 1.5 3.5 1.5 5.7l-1.2 1a10 10 0 01-5 8.8c-1.5.9-3.3 1.3-5.2 1.3zm.3-2.8a7.9 7.9 0 007-4c.7-1.3 1-2.7 1-4.3 0-1.6-.3-3-1-4.3a7.7 7.7 0 00-2.9-3 7.6 7.6 0 00-4-1c-1.6 0-3 .3-4.2 1a8 8 0 00-3 3c-.7 1.3-1 2.7-1 4.3 0 1.6.3 3 1 4.3a8 8 0 007.1 4zM53 32c-.5 0-.9-.1-1.1-.4-.3-.3-.5-.7-.5-1.1v-6.9l.8-3.1 2.3.6v9.4c0 .4-.1.8-.4 1.1-.3.3-.7.4-1.1.4zm26.3 0c-.5 0-.8-.1-1.1-.4-.3-.3-.5-.7-.5-1.1V20c0-1.7-.3-3-1-4.1-.6-1-1.4-1.9-2.5-2.4a8 8 0 00-3.6-.8c-1.3 0-2.5.3-3.6.8-1 .5-1.9 1.2-2.5 2-.6 1-.9 2-.9 3h-2.2c0-1.6.5-3.1 1.4-4.4a9.7 9.7 0 018.1-4.3c1.9 0 3.6.4 5 1.2 1.6.8 2.7 1.9 3.6 3.4a11 11 0 011.3 5.6v10.4c0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5zM62 32c-.5 0-.9-.1-1.2-.4-.2-.3-.4-.7-.4-1.1V11.7c0-.5.2-.9.4-1.1.3-.3.7-.5 1.2-.5.4 0 .8.2 1 .5.4.2.5.6.5 1v18.9c0 .4-.1.8-.4 1.1-.3.3-.7.4-1.1.4zm35.1.2c-2 0-4-.5-5.6-1.4-1.6-1-2.9-2.3-3.8-4a12 12 0 01-1.4-5.7c0-2.2.5-4.1 1.5-5.8 1-1.7 2.3-3 4-4 1.6-.9 3.5-1.4 5.7-1.4 2.1 0 4 .5 5.7 1.5 1.7.9 3 2.2 3.9 3.9 1 1.7 1.4 3.6 1.5 5.8l-1.8 1c0 2-.4 3.7-1.3 5.2a9.3 9.3 0 01-8.4 4.9zm.4 8.4c-2 0-4-.4-5.5-1.2-1.6-.7-3-1.8-4-3.2-.3-.3-.4-.6-.4-1s.3-.7.6-1c.4-.2.7-.2 1.2-.2.4.1.7.3 1 .6.7 1 1.7 1.8 3 2.4 1.2.5 2.6.8 4.2.8 1.5 0 2.8-.3 4-1a7.6 7.6 0 002.9-3c.7-1.4 1-3 1-4.7v-6l1.2-2.4 1.9.4v8.1c0 2.2-.5 4.1-1.5 5.8a10.7 10.7 0 01-9.6 5.6zm0-11.2c1.5 0 3-.3 4.1-1a7.7 7.7 0 002.9-3c.7-1.3 1-2.7 1-4.3 0-1.6-.3-3-1-4.3a8 8 0 00-7-4c-1.6 0-3 .3-4.2 1a7.3 7.3 0 00-3 3c-.6 1.2-1 2.7-1 4.3 0 1.6.4 3 1 4.3a7.7 7.7 0 007.2 4zM144 32c-.4 0-.8-.1-1.1-.4-.3-.3-.4-.7-.4-1.1V19c0-2-.5-3.4-1.5-4.5a4.8 4.8 0 00-3.8-1.7c-1.7 0-3 .6-4.1 1.7a6 6 0 00-1.5 4.4h-2.8c0-1.8.4-3.4 1.2-4.7a8 8 0 013-3.2 8.8 8.8 0 018.7 0c1.2.7 2.1 1.8 2.8 3.2.7 1.3 1 3 1 4.8v11.5c0 .4-.1.8-.4 1.1-.3.3-.6.4-1 .4zm-28 0c-.5 0-.8-.1-1.1-.4-.3-.3-.4-.7-.4-1.1V11.7c0-.5 0-.8.4-1.1.3-.3.6-.5 1.1-.5.5 0 .8.2 1.1.5.3.3.4.6.4 1v18.9c0 .4-.1.8-.4 1.1-.3.3-.6.4-1 .4zm14 0c-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1V19c0-2-.5-3.4-1.5-4.5a4.8 4.8 0 00-3.8-1.7c-1.6 0-3 .5-4 1.6-1.1 1.1-1.7 2.5-1.7 4.2h-2.2c0-1.7.5-3.2 1.2-4.5a7.8 7.8 0 017-4.2 7.4 7.4 0 017 4.3c.7 1.3 1 3 1 4.8v11.5c0 .4 0 .8-.4 1.1-.2.3-.6.4-1 .4zm32 .2a10.7 10.7 0 01-9.4-5.4c-1-1.7-1.4-3.6-1.4-5.7 0-2.2.5-4 1.4-5.7a11 11 0 019.7-5.4 10.8 10.8 0 019.6 5.4c1 1.6 1.5 3.5 1.5 5.7l-1.2 1a10.1 10.1 0 01-5 8.8c-1.5.9-3.3 1.3-5.2 1.3zm.3-2.8a7.9 7.9 0 007-4c.7-1.3 1-2.7 1-4.3 0-1.6-.3-3-1-4.3a7.7 7.7 0 00-2.9-3 7.6 7.6 0 00-4-1c-1.6 0-3 .3-4.2 1a8 8 0 00-3 3c-.6 1.3-1 2.7-1 4.3 0 1.6.4 3 1 4.3a8 8 0 007.1 4zM172 32c-.5 0-.9-.1-1.1-.4-.3-.3-.5-.7-.5-1.1v-6.9l.8-3.1 2.3.6v9.4c0 .4-.1.8-.4 1.1-.3.3-.7.4-1.1.4zm26.3 0c-.5 0-.8-.1-1.1-.4-.3-.3-.5-.7-.5-1.1V20c0-1.7-.3-3-1-4.1-.6-1-1.4-1.9-2.5-2.4a8 8 0 00-3.6-.8c-1.3 0-2.5.3-3.6.8-1 .5-1.9 1.2-2.5 2-.6 1-.9 2-.9 3h-2.2c0-1.6.5-3.1 1.4-4.4a9.7 9.7 0 018.1-4.3c1.9 0 3.6.4 5 1.2 1.6.8 2.7 1.9 3.6 3.4a11 11 0 011.3 5.6v10.4c0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5zM181 32c-.5 0-.9-.1-1.2-.4-.2-.3-.4-.7-.4-1.1V11.7c0-.5.2-.9.4-1.1.3-.3.7-.5 1.2-.5.4 0 .8.2 1 .5.4.2.5.6.5 1v18.9c0 .4-.1.8-.4 1.1-.3.3-.7.4-1.1.4z"
    />
  </svg>
);

const Description = () => (
  <svg fill="none" viewBox="0 0 207 17" height="16">
    <path
      fill="#6C757D"
      d="M1 13c-.3 0-.5-.1-.6-.3a.6.6 0 010-.6L5 .9c0-.3.3-.4.6-.4.2 0 .4.1.6.4L11 12.1v.6l-.6.3-.3-.1a.7.7 0 01-.3-.3L5.4 2H6L1.5 12.6l-.3.3-.3.1zm1-3l.4-1H9l.5 1H2zm18.4 3c-.6 0-1.2 0-1.8-.2-.7-.3-1.2-.6-1.5-1a.5.5 0 01-.2-.4c0-.2.1-.3.3-.4a.6.6 0 01.8 0c.3.3.6.6 1 .7l1.4.3c.8 0 1.4-.2 1.7-.4.4-.3.6-.6.6-1s-.2-.7-.6-1L20.4 9c-1.1-.1-2-.4-2.4-.9a2 2 0 01-.8-1.5c0-.5.2-1 .5-1.3.3-.4.6-.7 1.1-.9l1.6-.2c.7 0 1.3 0 1.8.3.6.3 1 .6 1.3 1 .1.2.2.3.1.5 0 .1 0 .2-.2.3l-.5.1a.8.8 0 01-.4-.2c-.3-.3-.6-.6-1-.7a3 3 0 00-1.1-.2c-.6 0-1 0-1.4.3-.4.3-.6.6-.6 1l.2.6.7.5 1.4.3c.8.1 1.4.3 1.9.6.4.2.8.5 1 .9.2.3.3.7.3 1 0 .6-.2 1-.5 1.4-.3.4-.7.6-1.2.9-.5.2-1 .3-1.8.3zm6.5 0c-.2 0-.4 0-.5-.2a.7.7 0 01-.1-.4V4.9l.1-.5.5-.2.4.2.2.5v7.5c0 .2 0 .3-.2.4l-.4.2zm0-10.4c-.3 0-.5-.1-.6-.3a.8.8 0 01-.3-.6c0-.3 0-.5.3-.6.1-.2.3-.3.6-.3l.6.3c.2.1.2.3.2.6 0 .2 0 .5-.2.6l-.6.3zM42.5 13c-.2 0-.4 0-.5-.2a.6.6 0 01-.2-.4V7.8c0-.8-.2-1.4-.6-1.8a2 2 0 00-1.5-.7c-.6 0-1.2.2-1.6.7-.4.4-.6 1-.6 1.8h-1.1c0-.8.1-1.4.4-2 .3-.5.7-.9 1.3-1.2a3.5 3.5 0 013.4 0c.5.3.9.7 1.1 1.3.3.5.5 1.1.5 1.9v4.6l-.2.4-.4.2zm-11.2 0c-.2 0-.4 0-.5-.2a.6.6 0 01-.2-.4V4.9c0-.2 0-.4.2-.5l.5-.2.4.2.2.5v7.5l-.2.4-.4.2zm5.6 0c-.2 0-.4 0-.5-.2a.6.6 0 01-.2-.4V7.8c0-.8-.2-1.4-.5-1.8a2 2 0 00-1.6-.7c-.6 0-1.2.2-1.6.7-.4.4-.6 1-.6 1.7h-1l.5-1.9c.3-.5.7-.9 1.2-1.2.5-.3 1-.4 1.7-.4A3 3 0 0137 5.9c.2.5.4 1.1.4 1.9v4.6c0 .2 0 .3-.2.4l-.4.2zm9.5 3.7l-.5-.1a.6.6 0 01-.1-.5V8.6a4.3 4.3 0 014.4-4.4 4.4 4.4 0 013.9 2.1c.4.7.6 1.5.6 2.3a4.5 4.5 0 01-2.1 3.9c-.7.4-1.4.6-2.2.6-.8 0-1.4-.2-2-.5a4 4 0 01-1.4-1.2v4.7c0 .2 0 .4-.2.5l-.4.1zm3.8-4.7c.6 0 1.2-.2 1.7-.5a3 3 0 001.1-1.2A3.4 3.4 0 0053 7a3.1 3.1 0 00-2.8-1.6c-.6 0-1.1.1-1.6.4A3 3 0 0047.4 7c-.3.5-.4 1-.4 1.7s.1 1.2.4 1.7c.3.5.7 1 1.2 1.2.5.3 1 .5 1.6.5zm8.8 1a2 2 0 01-1.2-.4c-.3-.2-.6-.5-.8-1l-.2-1.4v-9l.1-.5.5-.2c.2 0 .3 0 .4.2l.2.4v9.1c0 .5 0 .9.3 1.2.2.2.4.4.7.4h.4c.1 0 .3 0 .4.2l.1.4c0 .2 0 .3-.2.4l-.5.2H59zm6.1 0c-.9 0-1.6-.1-2.3-.5-.7-.4-1.2-.9-1.6-1.6-.3-.6-.5-1.4-.5-2.3 0-.8.1-1.6.5-2.3a4 4 0 011.5-1.6 4 4 0 012.2-.5c.8 0 1.5.2 2 .5.7.4 1.1.9 1.5 1.5.3.7.5 1.4.5 2.3 0 .1 0 .3-.2.4l-.4.1h-6.8V8h7l-.8.5c0-.6 0-1.2-.3-1.7a2.7 2.7 0 00-2.5-1.5 3 3 0 00-1.6.4 3 3 0 00-1.1 1.2c-.3.5-.4 1-.4 1.7s.2 1.3.4 1.8a3.2 3.2 0 002.9 1.6c.4 0 .8 0 1.1-.2a3 3 0 001-.5l.4-.2.4.1.2.5c0 .1 0 .2-.2.3l-1.3.8-1.6.3zm8.2 3.7l-.4-.1a.6.6 0 01-.2-.5c0-.2 0-.3.2-.4l.4-.2a2.3 2.3 0 002.2-1.2c.2-.4.3-.8.3-1.3V4.9c0-.2 0-.4.2-.5l.4-.2.5.2.2.5V13c0 .7-.2 1.4-.5 2-.3.5-.8 1-1.3 1.3-.6.3-1.3.4-2 .4zm3.1-14.1l-.6-.3a.8.8 0 01-.2-.6c0-.3 0-.5.2-.6l.6-.3c.3 0 .5.1.6.3.2.1.3.3.3.6 0 .2 0 .5-.2.6-.2.2-.4.3-.7.3zm7 10.5a4.3 4.3 0 01-3.7-2.2c-.4-.7-.6-1.4-.6-2.3 0-.8.2-1.6.6-2.3.4-.6 1-1.2 1.6-1.5.6-.4 1.4-.6 2.2-.6a4.3 4.3 0 013.9 2.1c.4.7.6 1.5.6 2.3l-.5.4a4 4 0 01-2 3.6 4 4 0 01-2 .5zm.1-1.1a3.1 3.1 0 002.8-1.7 3.4 3.4 0 000-3.4 3 3 0 00-1.1-1.2 3 3 0 00-1.7-.4c-.6 0-1.1.1-1.6.4-.5.3-.9.7-1.2 1.2-.3.5-.4 1-.4 1.7s.1 1.2.4 1.7a3.2 3.2 0 002.8 1.7zm3.9 1c-.2 0-.4 0-.5-.2a.6.6 0 01-.2-.4V9.7l.4-1.3.9.2v3.8c0 .2 0 .3-.2.4l-.4.2zm5.5 0c-.3 0-.4-.1-.6-.4L88.8 5s-.1-.2 0-.4l.3-.3h.4c.1 0 .3.1.3.3l3.4 7.3h-.6l3.3-7.3c.1-.2.2-.3.4-.3h.4c.2 0 .3.2.3.3V5l-3.5 7.6c-.1.3-.3.4-.6.4zm9.4 0c-.8 0-1.6-.1-2.2-.5A4.4 4.4 0 0198 8.6c0-.8.2-1.6.6-2.3.3-.6.9-1.2 1.6-1.5.6-.4 1.4-.6 2.2-.6a4.3 4.3 0 013.9 2.1c.4.7.6 1.5.6 2.3l-.5.4a4 4 0 01-2 3.6 4 4 0 01-2.1.5zm.1-1a3.1 3.1 0 002.8-1.7 3.4 3.4 0 000-3.4 3 3 0 00-1.1-1.2 3 3 0 00-1.7-.4c-.6 0-1.1.1-1.6.4-.5.3-.9.7-1.2 1.2-.3.5-.4 1-.4 1.7s.1 1.2.4 1.7a3.2 3.2 0 002.8 1.7zm3.8 1c-.1 0-.3 0-.4-.2a.6.6 0 01-.2-.4V9.7l.3-1.3 1 .2v3.8c0 .2 0 .3-.2.4l-.5.2zm6.1 0c-.6 0-1.2 0-1.8-.2-.7-.3-1.2-.6-1.6-1a.5.5 0 01-.1-.4l.2-.4a.6.6 0 011 0c.2.3.5.6 1 .7.3.2.8.3 1.3.3.8 0 1.4-.2 1.7-.4.4-.3.6-.6.6-1s-.2-.7-.6-1l-1.8-.6c-1-.1-1.8-.4-2.3-.9a2 2 0 01-.8-1.5c0-.5.2-1 .5-1.3.2-.4.6-.7 1.1-.9l1.6-.2c.7 0 1.3 0 1.8.3.6.3 1 .6 1.3 1l.1.5c0 .1 0 .2-.2.3l-.5.1a.8.8 0 01-.4-.2c-.3-.3-.6-.6-1-.7a3 3 0 00-1.1-.2c-.6 0-1.1 0-1.4.3-.4.3-.6.6-.6 1 0 .2 0 .4.2.6l.7.5 1.4.3c.8.1 1.4.3 1.9.6.4.2.8.5 1 .9.2.3.3.7.3 1 0 .6-.2 1-.5 1.4-.3.4-.7.6-1.2.9-.5.2-1.1.3-1.8.3zm9.5 0c-.8 0-1.6-.1-2.3-.5a4.4 4.4 0 01-2-3.9c0-.8.1-1.6.5-2.3a4.1 4.1 0 013.6-2.1 4.2 4.2 0 013.3 1.5l.1.4c0 .2-.1.3-.3.4 0 0-.2.1-.4 0a.7.7 0 01-.3-.2 3 3 0 00-2.4-1 3 3 0 00-1.5.4A3 3 0 00119 7c-.2.5-.4 1-.4 1.7s.2 1.2.4 1.7a3 3 0 002.8 1.7c.4 0 .8 0 1.1-.2l1-.5.4-.2.3.1c.2.1.2.3.3.4 0 .2 0 .3-.2.4-.8.7-1.7 1-2.9 1zm6.1-5.4a3.6 3.6 0 011.7-3c.6-.3 1.2-.4 1.8-.4.5 0 .8 0 1.1.2.3.1.4.3.3.6l-.2.3h-.9c-.6 0-1 0-1.6.2-.4.2-.8.4-1 .8-.3.4-.5.8-.5 1.3h-.7zm.1 5.4c-.2 0-.3 0-.4-.2a.6.6 0 01-.2-.4V4.9c0-.2 0-.4.2-.5l.4-.2.5.2.1.5v7.5l-.1.4-.5.2zm7.6 0c-.2 0-.3 0-.4-.2a.7.7 0 01-.2-.4V4.9c0-.2 0-.4.2-.5l.4-.2.5.2.1.5v7.5l-.1.4-.5.2zm0-10.4l-.6-.3a.8.8 0 01-.2-.6c0-.3 0-.5.2-.6l.6-.3c.3 0 .5.1.6.3.2.1.3.3.3.6 0 .2 0 .5-.3.6-.1.2-.3.3-.6.3zm4.4 14.1l-.5-.1a.6.6 0 01-.1-.5V8.6c0-.9.2-1.6.6-2.3a4.3 4.3 0 013.8-2.1 4.4 4.4 0 013.9 2.1c.4.7.6 1.5.6 2.3a4.5 4.5 0 01-2.1 3.9c-.7.4-1.4.6-2.2.6-.8 0-1.4-.2-2-.5a4 4 0 01-1.4-1.2v4.7c0 .2 0 .4-.2.5l-.4.1zm3.8-4.7c.6 0 1.2-.2 1.7-.5a3 3 0 001.1-1.2 3.4 3.4 0 000-3.4 3.1 3.1 0 00-2.8-1.6c-.6 0-1.1.1-1.6.4A3 3 0 00141 7c-.3.5-.4 1-.4 1.7s.1 1.2.4 1.7c.3.5.7 1 1.2 1.2.5.3 1 .5 1.6.5zm10.3 1a3 3 0 01-1.5-.4 3 3 0 01-1-1c-.3-.6-.4-1-.4-1.7V2.1l.1-.5.5-.1.4.1.2.5v7.8c0 .6.2 1 .5 1.4.3.3.7.5 1.2.5h.4l.5.1.1.5c0 .2 0 .3-.2.4l-.5.2h-.3zm-4-7.4l-.4-.1a.5.5 0 01-.1-.4l.1-.4.4-.1h4.1l.4.1.2.4c0 .2 0 .3-.2.4l-.4.1h-4zm15.6 7.5c-.9 0-1.6-.2-2.3-.6-.6-.4-1.1-.9-1.5-1.6-.4-.6-.5-1.4-.5-2.3 0-.8.1-1.6.5-2.3a4 4 0 011.6-1.6c.7-.3 1.4-.5 2.3-.5.9 0 1.6.2 2.3.5a4 4 0 011.6 1.6c.3.7.5 1.5.5 2.3l-.7.4c0 .8-.1 1.5-.5 2.1a3.7 3.7 0 01-3.3 2zm.1 3.4a5 5 0 01-2.2-.5c-.6-.3-1.2-.8-1.6-1.3a.5.5 0 01-.1-.4c0-.2 0-.3.2-.4h.5c.1 0 .3 0 .4.2l1.2.9c.4.2 1 .3 1.6.3a3 3 0 002.8-1.6c.3-.5.4-1.1.4-1.9V9.4l.5-1 .7.2V12c0 .9-.1 1.6-.5 2.3a4.3 4.3 0 01-3.9 2.3zm0-4.5c.6 0 1.2-.2 1.7-.5a3 3 0 001.1-1.1c.3-.5.4-1.1.4-1.8 0-.6-.1-1.2-.4-1.7a3.2 3.2 0 00-2.8-1.6c-.6 0-1.2.1-1.7.4A3 3 0 00163 7c-.3.5-.4 1-.4 1.7s0 1.3.4 1.8a3 3 0 002.8 1.6zm10.7 1c-.8 0-1.6-.1-2.2-.5a4.4 4.4 0 01-2.1-3.9 4.3 4.3 0 012.2-3.9c.6-.3 1.4-.5 2.2-.5a4.3 4.3 0 013.9 2.1c.4.7.6 1.5.6 2.3l-.5.4a4 4 0 01-2 3.6 4 4 0 01-2.1.5zm.1-1a3.1 3.1 0 002.8-1.7 3.4 3.4 0 000-3.4 3 3 0 00-1.1-1.2 3 3 0 00-1.7-.4c-.6 0-1.1.1-1.6.4-.5.3-.9.7-1.2 1.2-.3.5-.4 1-.4 1.7s.1 1.2.4 1.7a3.2 3.2 0 002.8 1.7zm3.9 1c-.2 0-.4 0-.5-.2a.6.6 0 01-.2-.4V9.7l.3-1.3 1 .2v3.8c0 .2 0 .3-.2.4l-.4.2zm14.8 0c-.2 0-.3 0-.5-.2a.6.6 0 01-.1-.4V7.8c0-.8-.2-1.4-.6-1.8a2 2 0 00-1.5-.7c-.7 0-1.2.2-1.7.7-.4.4-.6 1-.6 1.8h-1c0-.8 0-1.4.4-2 .3-.5.7-.9 1.2-1.2a3.5 3.5 0 013.5 0c.4.3.8.7 1 1.3.4.5.5 1.1.5 1.9v4.6c0 .2 0 .3-.2.4l-.4.2zM184 13c-.2 0-.4 0-.5-.2a.6.6 0 01-.1-.4V4.9l.1-.5.5-.2.4.2.2.5v7.5c0 .2 0 .3-.2.4l-.4.2zm5.6 0c-.2 0-.3 0-.4-.2a.6.6 0 01-.2-.4V7.8c0-.8-.2-1.4-.6-1.8a2 2 0 00-1.5-.7c-.7 0-1.2.2-1.7.7-.4.4-.6 1-.6 1.7h-.9c0-.7.2-1.3.5-1.9.3-.5.6-.9 1.1-1.2.5-.3 1-.4 1.7-.4a3 3 0 011.7.4c.5.3.8.7 1.1 1.3.3.5.4 1.1.4 1.9v4.6c0 .2 0 .3-.2.4l-.4.2zm12.9 0c-.9 0-1.6-.1-2.3-.5-.7-.4-1.2-.9-1.6-1.6-.3-.6-.5-1.4-.5-2.3 0-.8.1-1.6.5-2.3a4 4 0 013.7-2.1 4 4 0 012 .5c.7.4 1.1.9 1.5 1.5.3.7.5 1.4.5 2.3 0 .1 0 .3-.2.4l-.4.1H199V8h7l-.8.5c0-.6 0-1.2-.3-1.7a2.7 2.7 0 00-2.5-1.5 3 3 0 00-1.6.4 3 3 0 00-1.1 1.2c-.3.5-.4 1-.4 1.7s.2 1.3.4 1.8a3.2 3.2 0 002.9 1.6c.4 0 .8 0 1.1-.2a3 3 0 001-.5l.4-.2.4.1.2.5c0 .1 0 .2-.2.3l-1.3.8-1.6.3z"
    />
  </svg>
);

interface StartMenuProps {}

export const StartMenu: React.FC<StartMenuProps> = () => (
  <BaseCard>
    <Hangman />
    <Description />
    <GallowsIcon />
    <HangmanButton>Play</HangmanButton>
  </BaseCard>
);

const BaseCard = styled.div`
  background-color: white;
  border-radius: 24px;
  padding: 1.25rem;

  margin: auto;
  text-align: center;

  align-items: center;
  display: flex;
  flex-direction: column;

  min-height: 425px;
  max-width: 450px;

  height: stretch;
  width: stretch;

  & > svg.title {
    margin-bottom: 0.75rem;
  }
  & > svg.gallowsIcon {
    margin: auto;
  }
`;
