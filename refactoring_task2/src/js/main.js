const content = document.querySelectorAll(".content-container__item");
const listItems = Array.from(document.querySelectorAll(".tab-navs__list__item"));

function showTabs(e) {
    if (e.target.className === 'tab-navs__list__item__button') {
        const targetContent = document.querySelector(e.target.dataset.target);
        content.forEach((contentElement)=>{
            if(contentElement === targetContent) {
                contentElement.classList.add('content-container__item--active');
                e.target.parentElement.classList.add('tab-navs__list__item--active')
            } else {
                contentElement.classList.remove('content-container__item--active');
                listItems.forEach(listItem => {
                    if (listItem !== e.target.parentElement) {
                        listItem.classList.remove('tab-navs__list__item--active')
                    }
                });
            }
        })
    } 
    e.stopPropagation();
}
export default showTabs
