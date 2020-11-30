'use strict';

var gProjects;
var gId = 0;

function createProjects() {
    gProjects = [
        createProject(
            'Mine Sweeper',
            'js game',
            'first sprint of coding academy',
            'https://leshyy.github.io/Mine-Sweeper/'
        ),
        createProject(
            'Book Store',
            'mvc practice',
            'interface that allows a store owner to manage an online store',
            'https://leshyy.github.io/Mine-Sweeper/'
        ),
        createProject(
            'Touch Nums',
            'fun game made with js',
            'used timer and some html and css',
            'https://leshyy.github.io/Mine-Sweeper/'
        ),
    ];
}

function createProject(name, title, desc, url, imgUrl) {
    return {
        id: makeId(),
        name,
        title,
        desc,
        url,
        imgUrl,
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    };
}

function getProjects() {
    return gProjects;
}

function getProject(projId) {
    var project = gProjects.find(function (project) {
        return projId === project.id;
    });
    return project;
}

function makeId(length = 4) {
    var txt = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}
