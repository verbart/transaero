import $ from 'jquery';


const toggleTab = function (tab) {
    const target = tab.data('target');

    if (!target) {
        console.warn('You must add data-target attribute to this tab.');
    } else if (!$(target).length) {
        console.warn(`Reference ${target} indicates a non-existent element .`);
    } else {
        $('.tabs__tab_active').removeClass('tabs__tab_active');
        tab.addClass('tabs__tab_active');

        $('.tabs__content_active').removeClass('tabs__content_active');
        $(target).addClass('tabs__content_active');
    }
};

toggleTab($('.tabs__tab_active'));

$('.tabs__tab').click(event => {
    toggleTab($(event.target).closest('.tabs__tab'));
});
