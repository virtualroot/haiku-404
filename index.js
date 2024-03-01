// NetPositive is a web browser for the BeOS operating system.
// It's famous for its haiku error messages.
// This package lists those messages.
// https://8325.org/haiku/

'use strict';

var haiku = [
	`The web site you seek,
Lies beyond our perceptionbr/>
But others await.`,
	`Click exciting link,
Gossamer threads hold you back
404 not found.`,
	`With searching comes loss
And the presence of absence:
The site is not found.`,
	`There is a chasm
Of carbon and silicon
The server can't bridge.`,
	`Visit the home page
It can't be done easily
When the site is down.`,
	`The ten thousand things
How long do any persist?
The file, not there.`,
	`Error reduces
Your expensive computer
To a simple stone.`,
	`Chaos reigns within.
Reflect, repent, and retry.
Server shall return.`,
	`Cables have been cut
Southwest of Northeast somewhere
We are not amused.`,
	`A file that big?
It might be very useful
But now it is gone.`,
	`Mourning and sorrow
404 not with us now
Lost to paradise.`,
	`Rather than a beep
Or a rude error message,
These words: 'Site not found.'`,
	`To have no errors
Would be life without meaning
No struggle, no joy`,
	`Wind catches lily
Scatt'ring petals to the wind:
Your site is not found.`,
	`Not a pretty sight
When the web dies screaming loud
The site is not found.`,
	`Something you entered
Transcended parameters.
The site is unknown.`,
	`Errors have occurred.
We won't tell you where or why.
Lazy programmers.`,
	`These three are certain:
Death, taxes, and site not found.
You, victim of one.`,
	`Click exciting link
Gossamer threads hold you back
404 not found.`,
	`Yesterday it worked
Today it is not working
The web is like that.`,
	`The code was willing
It considered your request,
But the chips were weak.`,
];

exports.pickHaiku = function() {
	return haiku[Math.floor(Math.random() * haiku.length)];
}