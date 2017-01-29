README
------

Next.js has great support for scoped css thanks to `styled-jsx` implementation. However, using only styled-jsx and a large and existing project can be difficult and a bit extreme. Global styles however can be more familiar and most designers already know how to work with them.

This react component allows you to include `css` files in your pages. It does not matter how you generate the css file, wether you edit it directly, generate it with `less` or `sass` or you automatically build it with your editor. The file will be releloaded and if the style changes it will be applied.

Unfortunately this is using http polling to pick up changes therefore has to be considered just an experiment and it can't be used in production. See notes.

### Install

    npm install next.js-css-poller

### Example

    export default () =>
      <div>
        <CssPoller href="/static/ciao.css" />
        <p>ciao</p>
      </div>

### Notes

- Don't put this component inside next's Head component. It will not work properly.
- I am still looking for transparent way to avoid polling when in production.
