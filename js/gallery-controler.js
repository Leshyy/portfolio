'use strict';

function initPage() {
    createProjects();
    renderProjects();
}

function renderProjects() {
    var strHTML;
    var projects = getProjects();
    var projectsHTML = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a
            onclick="onOpenModal('${project.id}')"
            class="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal"
        >
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img
                class="img-fluid"
                src="img/portfolio/02-thumbnail.jpg"
                alt=""
            />
        </a>
        <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
        </div>
    </div>`;
    });
    strHTML = projectsHTML.join('');
    $('.portfolio-container').html(strHTML);
}

function onOpenModal(projId) {
    var project = getProject(projId);
    console.log(project.url);
    var $projName = $('.modal-body h2');
    var $projTitle = $('.modal-body p:first-of-type');
    var $projDesc = $('p.modal-desc');
    var $projLink = $('.modal-project-link');
    var $projImg = $('.modal-img');

    $projName.text(project.name);
    $projTitle.text(project.title);
    $projDesc.text(project.desc);
    $projLink.attr('href', project.url);
    $projImg.attr('src', project.imgUrl);
}

function onContact() {
    var $subject = $('#subject');
    var $userEmail = $('#user-email');
    var $messageContent = $('#message-content');
    var contactUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'tamir.leshetz@gmail.com'}&su=${encodeURI(
        $subject.val()
    )}&body=${encodeURI($messageContent.val() + '\n' + $userEmail.val())}`;
    window.open(contactUrl, 'blank');
}

function onAddProject() {
    var $projName = $('#add-project-name');
    var $projDesc = $('#add-project-desc');
    var $projUrl = $('#add-project-url');
    addProject($projName.val(), 'poopy title', $projDesc.val(), $projUrl.val());
    $projName.val('');
    $projDesc.val('');
    $projUrl.val('');
    renderProjects();
}
