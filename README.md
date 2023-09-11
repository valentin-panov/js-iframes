# Iframe demo

That is intentionally vulnerable for XSS web application, consisting iframe. Try to break into iframe from the top application.
```html
<iframe 
        id="test_iframe" 
        src='/public/card.html' 
        class="iframe_el"/>
```

Live version https://valentin-panov.github.io/js-iframes/

If you push red button, application will inject simple xss payload to the page. Feel free to change it in the top input field.
