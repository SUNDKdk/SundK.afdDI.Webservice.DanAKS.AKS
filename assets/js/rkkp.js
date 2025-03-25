/*

    Advanced View

*/

// Hide a Column from Col Index in a table
function hideAdvancedColumn(columnIndex) {
    var tables = document.querySelectorAll('table');
    tables.forEach(function (table) {
        var rows = table.querySelectorAll('tr');
        rows.forEach(function (row) {
            var cells = row.querySelectorAll('th, td');
            if (columnIndex >= 0 && columnIndex < cells.length) {
                cells[columnIndex].classList.add('hidden-col');
            }
        });
    });
}

// Hide a Row based on Class in a table
function hideAdvancedRows() {
    var rows = document.querySelectorAll('tr.advanced-data');
    rows.forEach(function (row) {
        row.classList.add('hidden-row');
    });
}

// Toggle Advanced Data
var checkboxAdvView = document.getElementById('toggleAdvView');
checkboxAdvView.addEventListener('change', toggleAdvView);

function toggleAdvView() {
    var hiddenCells = document.querySelectorAll('td.hidden-col, th.hidden-col');
    var hiddenRows = document.querySelectorAll('tr.hidden-row, th.hidden-row');
    var visibleCells = document.querySelectorAll('td.visible-col, th.visible-col');
    var visibleRows = document.querySelectorAll('tr.visible-row, th.visible-row');
    var gitHubIcon = document.getElementById('github-link');

    if (checkboxAdvView.checked) {
        hiddenCells.forEach(function (cell) {
            cell.classList.remove('hidden-col');
            cell.classList.add('visible-col');
        });

        hiddenRows.forEach(function (row) {
            row.classList.remove('hidden-row');
            row.classList.add('visible-row');
        });
        gitHubIcon.classList.remove('hidden');
    } else {
        visibleCells.forEach(function (cell) {
            cell.classList.remove('visible-col');
            cell.classList.add('hidden-col');
        });

        visibleRows.forEach(function (row) {
            row.classList.remove('visible-row');
            row.classList.add('hidden-row');
        });
        gitHubIcon.classList.add('hidden');
    }
};

/*

    Filtering Tabs

*/

var allGroups = ["groupReport", "groupActivity", "groupContact", "groupCourse", "groupDiagnosis", "groupObservation", "groupGray"];

function filterTypes(targetGroup, button) {
    var oldTab = document.querySelector('.nav-link.active');
    oldTab.classList.remove('active');
    button.classList.add('active');
    if (targetGroup === "showAll") {
        allGroups.forEach(function (elementId) {
            var a = document.getElementById(elementId);
            if (a) {  // Check if the element exists
                if (a.classList.contains("hidden")) {
                    a.classList.remove("hidden");
                }
            }
        });
    } else {
        allGroups.forEach(function (elementId) {
            var a = document.getElementById(elementId);
            if (a) {  // Check if the element exists
                if (elementId === targetGroup) {
                    if (a.classList.contains("hidden")) {
                        a.classList.remove("hidden");
                    }
                } else {
                    a.classList.add("hidden");
                }
            }
        });
    }
};

/*

    Json Tabs

*/

function jsonTabs(button) {
    console.log(button)
    if (button === "postJSONTab") {
        document.getElementById('putJSONTab').classList.remove('active');
        document.getElementById('putJSONContent').classList.add('hidden');
        document.getElementById('postJSONTab').classList.add('active');
        document.getElementById('postJSONContent').classList.remove('hidden');
        document.getElementById('json_post_textarea').classList.add('current_json');
        document.getElementById('json_put_textarea').classList.remove('current_json');
    } else {
        document.getElementById('postJSONTab').classList.remove('active');
        document.getElementById('postJSONContent').classList.add('hidden');
        document.getElementById('putJSONTab').classList.add('active');
        document.getElementById('putJSONContent').classList.remove('hidden');
        document.getElementById('json_post_textarea').classList.remove('current_json');
        document.getElementById('json_put_textarea').classList.add('current_json');
    }
};

/*

    Greyscale Mode

*/

var checkboxGrayscale = document.getElementById('toggleGrayscale');
checkboxGrayscale.addEventListener('change', toggleGrayscale);
var root = document.documentElement;
var colorGray = getComputedStyle(root).getPropertyValue('--colorGray');
var colorReport = getComputedStyle(root).getPropertyValue('--colorReport');
var colorActivity = getComputedStyle(root).getPropertyValue('--colorActivity');
var colorContact = getComputedStyle(root).getPropertyValue('--colorContact');
var colorCourse = getComputedStyle(root).getPropertyValue('--colorCourse');
var colorDiagnosis = getComputedStyle(root).getPropertyValue('--colorDiagnosis');
var colorObservation = getComputedStyle(root).getPropertyValue('--colorObservation');

function toggleGrayscale() {
    if (checkboxGrayscale.checked) {
        root.style.setProperty('--colorReport', colorGray);
        root.style.setProperty('--colorActivity', colorGray);
        root.style.setProperty('--colorContact', colorGray);
        root.style.setProperty('--colorCourse', colorGray);
        root.style.setProperty('--colorDiagnosis', colorGray);
        root.style.setProperty('--colorObservation', colorGray);
    } else {
        root.style.setProperty('--colorReport', colorReport);
        root.style.setProperty('--colorActivity', colorActivity);
        root.style.setProperty('--colorContact', colorContact);
        root.style.setProperty('--colorCourse', colorCourse);
        root.style.setProperty('--colorDiagnosis', colorDiagnosis);
        root.style.setProperty('--colorObservation', colorObservation);
    }
};


/*

    Dark Mode

*/

var checkboxDarkMode = document.getElementById('toggleDarkMode');
checkboxDarkMode.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    if (checkboxDarkMode.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
};

/*

    Copy Json Button

*/

function copyText() {
    var textarea = document.getElementsByClassName("current_json");
    textarea[0].select();
    document.execCommand("copy");
};

/*

    Header Buttons

*/

function expandAll() {
    var divs = document.querySelectorAll('.collapse');
    divs.forEach(function (div) {
        div.classList.add('show');
    });
    document.getElementById('toggleExpand').classList.add('hidden');
    document.getElementById('toggleExpand').classList.remove('visible');
    document.getElementById('toggleCollapse').classList.add('visible');
    document.getElementById('toggleCollapse').classList.remove('hidden');
}

function collapseAll() {
    var divs = document.querySelectorAll('.collapse.show');
    divs.forEach(function (div) {
        div.classList.remove('show');
    });
    document.getElementById('toggleExpand').classList.add('visible');
    document.getElementById('toggleExpand').classList.remove('hidden');
    document.getElementById('toggleCollapse').classList.add('hidden');
    document.getElementById('toggleCollapse').classList.remove('visible');
}

/*

    Search Function

*/

const searchInput = document.getElementById('searchInput');
const searchableObjects = document.querySelectorAll('.dataObject');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm == "") {
        searchableObjects.forEach(function (element) {
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
            }
        });
    } else {
        searchableObjects.forEach(function (element) {
            var breadcrumb = element.querySelector('.breadcrumb-item.active');
            var description = element.querySelector('.objectDescription');
            let breadcrumb_text = '';
            let description_text = '';
            if (breadcrumb) {
                breadcrumb_text = (breadcrumb.innerText || '').toLowerCase();
            }
            if (description) {
                description_text = (description.innerText || '').toLowerCase();
            }
            const text = breadcrumb_text + " " + description_text;
            if (text.includes(searchTerm)) {
                if (element.classList.contains("hidden")) {
                    element.classList.remove("hidden");
                }
            } else {
                element.classList.add("hidden");
            }
        });
    }
});