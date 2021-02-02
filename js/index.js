function AnimationLeave() {
    return gsap.to('.container', { autoAlpha: 0, duration: .75, clearProps: 'all', ease: 'none' });
}
function AnimationEnter() {
    const imgThumbnail = document.querySelectorAll('.thumbnail-image')
    const project = document.querySelectorAll('.project')
    const img = document.querySelectorAll('img')


    const tl = gsap.timeline({
        defaults: {
            duration: 0.9,
            ease: 'Power4.out'
        }
    })

    tl.set(project, {autoAlpha: 1})
        .from(imgThumbnail, {delay: '1'})
        .from(img, { xPercent: -105, stagger: 0.1}, 0)

    return tl;
}

function animationHeader(){
    return gsap.from('header a', {y: '20%', opacity: 0, stagger: '0.5'})
}
barba.init({
    transitions: [
        {
            once(){
                AnimationEnter()
                animationHeader()
                onComplete: () => AnimationEnter()
            },
            leave(){
                AnimationLeave()
            },
            enter(){
                AnimationEnter()
                animationHeader()
            }
        }
    ]
})