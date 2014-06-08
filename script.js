// Get the absolute minimal work out of the way
$('.createbase input[type="radio"]').prop("checked", false);

// Select Pan by default (a personal favorite)
$('.createbase label:contains("Pan")').mouseover().click();

// Delete the cheeseburger base, because it's just repulsive in every way.
$('.createbase li:contains("Cheeseburger")').remove();

// Kill cheeseburger options from the top menu (very fragile).
// Please don't remind me you people also sell cheeseburger base.
$('#lst_529').remove();

// Even images of it put me off. So replace them with kittens.
$('img[src*="cheeseburger"]').each(function(){
    this.src = "http://placekitten.com/g/" + this.width + "/" + this.height;
});

