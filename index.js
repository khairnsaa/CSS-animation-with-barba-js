// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body')

//barba hooks
barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background)
})

// init Barba
barba.init({
  transitions: [
    {
      name: 'home',
      once(){}
    }, 
    {
      name: 'fade',
      to: {
        namespace: ['fade']
      },
      leave(){},
      enter(){}
    },
    {
      name: 'clip',
      sync: true,
      to: {
        namespace: ['clip']
      },
      leave(){},
      enter(){},
      beforeEnter(){
        console.log('before enter');
      }
    },
    {
      name: 'with-cover',
      to: {
        namespace: ['with-cover']
      },
      leave(){},
      enter(){}
    }
  ]
});
