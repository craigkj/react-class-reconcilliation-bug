
A demo showing a potential bug with className reconcilliation in react client side rendering onto a SSRs component. Issue is here: https://github.com/facebook/react/issues/13260

##  Requires
node 8

##  See it:
```
npm run build
npm start
```
Hit: `http://localhost:8088/test\`

You should see `Leonardo` on screen, shortly replaced by `Donatello`.
 
Inspect the html and you can it ends up as:

  

```html
<div  id="the-mount">
    <div  class="header--Leonardo"  data-reactroot="">
       <p>Donatello</p>
    </div>
</div>
```
What I would expect to see:

  

```html
<div  id="the-mount">
    <div  class="header--Donatello"  data-reactroot="">
        <p>Donatello</p>
    </div>
</div>
```

See the issue for notes and discussion.
