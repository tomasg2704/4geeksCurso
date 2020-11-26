function hideFeedDiv() {
    $('#photosButton').prop('disabled', true);
    $('#feedButton').prop('disabled', false);
    $('#feed').show();
    $('#photos').hide();
}

function hidePhotosDiv() {
    $('#photosButton').prop('disabled', false);
    $('#feedButton').prop('disabled', true);
    $('#feed').hide();
    $('#photos').show();
}