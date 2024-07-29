	/**
	 * demo.js
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Copyright 2017, Codrops
	 * http://www.codrops.com
	 */
	{
		setTimeout(() => document.body.classList.add('render'), 60);
		const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
		const total = navdemos.length;
		const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
		const navigate = (linkEl) => {
			document.body.classList.remove('render');
			document.body.addEventListener('transitionend', () => window.location = linkEl.href);
		};
		navdemos.forEach(link => link.addEventListener('click', (ev) => {
			ev.preventDefault();
			navigate(ev.target);
		}));
		document.addEventListener('keydown', (ev) => {
			const keyCode = ev.keyCode || ev.which;
			let linkEl;
			if ( keyCode === 37 ) {
				linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
			}
			else if ( keyCode === 39 ) {
				linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
			}
			else {
				return false;
			}
			navigate(linkEl);
		});
	}





	const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

        class FAQFilter {
        filtersSelector = '.cs-option'
        FAQselector = '.cs-faq-group'
        activeClass = 'cs-active'
        hiddenClass = 'cs-hidden'

        constructor() {
            const $filters = document.querySelectorAll(this.filtersSelector)
            this.$activeFilter = $filters[0]
            this.$images = document.querySelectorAll(this.FAQselector)

            this.$activeFilter.classList.add(this.activeClass)

            for (const $filter of $filters) {
            $filter.addEventListener('click', () => this.onClick($filter))
            }
        }

        onClick($filter) {
            this.filter($filter.dataset.filter)

            const { activeClass } = this

            this.$activeFilter.classList.remove(activeClass)
            $filter.classList.add(activeClass)

            this.$activeFilter = $filter
        }

        filter(filter) {
            const showAll = filter == 'all'
            const { hiddenClass } = this

            for (const $image of this.$images) {
            const show = showAll || $image.dataset.category == filter
            $image.classList.toggle(hiddenClass, !show)
            }
        }
        }

        new FAQFilter()
                                