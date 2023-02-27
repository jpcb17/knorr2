const reviewThread = document.querySelector('.review-thread');

const showReplyBtn = document.querySelector('.show-reply-btn');



reviewThread.addEventListener('click', (e) =>{
    console.log('click');
    const el = e.target;
    if(el.tagName === 'BUTTON' && el.classList.contains('review__toggler')){
        if(el.innerText === 'Hide'){
            el.innerText = 'Show';
            el.parentElement.nextElementSibling.style.display = 'none';
        }
        else{
            el.innerText = 'Hide';
            el.parentElement.nextElementSibling.style.display = 'block';
        }
    }

    else if(el.classList.contains('show-reply-btn'))
    {
        const div = document.createElement('div');
        div.className = 'review__reply';
        div.innerHTML = `<textarea class="review__reply__text" name="" id="" cols="30" rows="5" placeholder="Write a reply..."></textarea>
        <div>
            <button class="hide-reply-btn">Cancel</button>
            <button class="review__reply__btn">Reply</button>
        </div>`;
        el.insertAdjacentElement('afterend',div);
        el.style.display = 'none';
    }

    else if(el.classList.contains('hide-reply-btn'))
    {
        el.parentElement.parentElement.parentElement.querySelector('.show-reply-btn').style.display = 'block';
        el.parentElement.parentElement.remove();

    }
});

