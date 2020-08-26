/*
 * Welcome to your app's main JavaScript file!
 *
 */
import '../css/app.css';


import $ from 'jquery';
import 'datatables.net-dt';
import 'summernote/dist/summernote-bs4';

global.$ = global.jQuery = $;

import ('jszip');
import('datatables.net');
import ('datatables.net-buttons-dt');
require('datatables.net-buttons/js/buttons.flash.js')(window, $);
require('datatables.net-buttons/js/buttons.html5.js')(window, $);
import('moment');

$(document).ready(function () {
    setTimeout(function () {
        $('#snackbar').addClass('show');
        setTimeout(function () {
            $('#snackbar').removeClass('show');
        }, 3000);
    }, 500);


    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


    $('#data-table').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel'

        ]
    });

    $('.summernote').summernote({
        placeholder: 'Gebe hier den Text ein',
        tabsize: 2,
        height: 200,
        focus: true,
        lang: 'de-DE',
        toolbar: [
            ['style', ['pre']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', []],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link']],
            ['view', ['fullscreen']]
        ],
    });

    $('.checkboxSelect').on('change', function () {
        if ($(this).prop("checked") === true) {
            $('.sendButton').removeClass('disabled');
        } else if ($(this).prop("checked") === false) {
            $('.sendButton').addClass('disabled');
        }
    });
});

$(".clickable-row").click(function () {
    window.location = $(this).data("href");
});