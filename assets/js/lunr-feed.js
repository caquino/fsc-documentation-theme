---
---
{% if site.site_search %}
{% assign counter = 0 %}
var documents = [{% for page in site.pages %}{% if page.url contains '.xml' or page.url contains 'assets' or page.url contains '404' %}{% else %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endif %}{% endfor %}{% for page in site.without-plugin %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }, {% endfor %}{% for page in site.posts %}{
    "id": {{ counter }},
    "url": "{{ site.url }}{{ page.url }}",
    "title": "{{ page.title }}",
    "body": "{{ page.date | date: "%Y/%m/%d" }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"{% assign counter = counter | plus: 1 %}
    }{% if forloop.last %}{% else %}, {% endif %}{% endfor %}];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});

function initSearch() {
    console.log("init search...")

    // add keyup to search-input
    const desktopSearch = document.getElementById('search-input');
    const resultSection = document.getElementById('results-container');
    const resultCount = document.getElementById('show-results-count');
    const searchDiv = document.getElementById('search');

    //make results visible when focus is gained if search is not empty
    desktopSearch.addEventListener('focus', function () {
        resultCount.classList.remove('ml-[-46%]');
        resultCount.classList.add('ml-0');
        console.log('desktopSearch focus')
    });

    document.addEventListener('click', function (e) {
        const withinBoundaries = e.composedPath().includes(searchDiv)
        if (!withinBoundaries) {
            resultCount.classList.remove('ml-0');
            resultCount.classList.add('ml-[-46%]');
            resultSection.classList.add('hidden');
            console.log('document click')
        }
    });

    document.addEventListener('focus', function (e) {
        const withinBoundaries = e.composedPath().includes(searchDiv)
        if (!withinBoundaries) {
            resultCount.classList.remove('ml-0');
            resultCount.classList.add('ml-[-46%]');
            resultSection.classList.add('hidden');
            console.log('document focus')
        }
    });

    // on input, search and show results
    desktopSearch.addEventListener('keyup', function (e) {

        if (window.getComputedStyle(resultSection).display === "none") {
            resultSection.classList.remove('hidden');
        }

        resultCount.innerHTML = 'Searching....';
        const query = e.target.value;
        const results = idx.search(query);
        resultCount.innerHTML = results.length + ' Result' + (results.length !== 1 ? 's' : '');

        resultSection.innerHTML = '';
        for (var item in results) {
            var ref = results[item].ref;
            
            var link = document.createElement('a');
            link.href = documents[ref].url;
            link.innerHTML = documents[ref].title;

            var li = document.createElement('li');
            li.classList.add('p-px');
            li.appendChild(link);

            resultSection.appendChild(li);
        }
    });
}
{% endif %}