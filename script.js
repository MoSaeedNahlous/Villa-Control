const toggleHandler = (e) => {
    var arrow = e.target.firstElementChild
    var x = e.target.classList
    var style = e.target.nextElementSibling.style
    
    
    if (x.contains('closed')) {
        style.display = 'block'
        x.add('open')
        x.remove('closed')

        
    } else {
        style.display = 'none'
        x.add('closed')
        x.remove('open')

        
    }
}
var dd = document.querySelectorAll('.btn-tg')


dd.forEach(list => {
    list.addEventListener('click',toggleHandler)
})

const onHoldHandler = (e) => {
    e.target.style.backgroundColor="limegreen"
}
const onLeaveHandler = (e) => {
    e.target.style.backgroundColor="lightseagreen"
}
var switches = document.querySelectorAll('.switcharoo')
switches.forEach(swit=> {
    swit.addEventListener("mousedown", onHoldHandler);
    swit.addEventListener("mouseup",onLeaveHandler)
})



