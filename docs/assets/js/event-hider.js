var today = new Date();

// Remove hours, minutes, seconds from todays date
today.setHours(0, 0, 0, 0); 
today = today.getTime();

window.addEventListener('load', function () {
    // Filter out old events from up coming events section
    $('li[date-future]').each(function(){
        var postDate = new Date($(this).attr('date-future'));
        if (postDate.getTime() < today) $(this).hide();
    });

    // Filter out new events from past events section
    $('li[date-past]').each(function(){
        var postDate = new Date($(this).attr('date-past'));
        if (postDate.getTime() >= today) $(this).hide();
    });

    // Show now-filtered event display
    $("#event-display").show();
})
