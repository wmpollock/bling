#!/usr/bin/perl


use strict;
#use POSIX qw(round);
#my @shape = (1, 10, 5,8);
#my @shape = (1, 10, 5,8);
my @shape = (10);
#my @shape = (1,1,40);


my @letters = split(//,'All good projects go to seed eventually.');

my @distro;

#my $lcount = $#letters + 1;
my $lcount = $#letters;
my $scount = $#shape + 0; # We want less intervals than spaces

my $blockSize = $scount ? $lcount / $scount : -1;

print "shapes: $scount shapes: $lcount blocks size:$blockSize\n";

my %tally;

for  (my $i = 0; $i<=$#letters; $i++) {
	my $cellValue;	
    my $o = ($i/$blockSize);
   	my $floor = floor($o);
   	my $ceil = ceil($o);
   	
   	if ($blockSize < 0) {
   		$cellValue = $shape[0];	
	
   	} elsif ($ceil == $floor) {
   		
        $cellValue = $shape[$floor],
    } else {
    	
    	my $y1 = $shape[$floor];
    	my $y2 = $shape[$ceil];
    	my $x1 = $floor;
		my $x2 = $ceil;    		
		my $slope = ($y2 - $y1) / ($x2 - $x1);
		my $b = $y2 - ($slope * $x2);
		$cellValue = $slope * $o + $b;
    }
    
	# Finally some goddamned linear algebra(ah)!
    push(@distro, $cellValue);
}

use POSIX qw(ceil floor);
use Data::Dumper;
print(Data::Dumper->Dump([\@shape, \@distro]));


