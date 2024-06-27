class MenuNavMobile{
    constructor(mobileMenu, navigation, itemNav){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navigation = document.querySelector(navigation);
        this.itemNav = document.querySelectorAll(itemNav);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    animateLink(){
        this.itemNav.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "") 
            : (link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.2}s`);
        });
    }

    handleClick(){
        console.log(this);
        this.navigation.classList.toggle(this.activeClass);
        this.animateLink();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MenuNavMobile(
    ".mobileMenu",
    ".navigation",
    ".itemNav",
);
mobileNavbar.init();