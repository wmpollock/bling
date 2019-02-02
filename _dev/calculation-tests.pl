#!/usr/bin/perl


use strict;
#use POSIX qw(round);
my @shape = (1, 10, 5);

my @letters = split(//,'All good projects go to seed eventually.');

my @distro;

#my $lcount = $#letters + 1;
my $lcount = $#letters;
my $scountR = $#shape + 1; # We want less intervals than spaces
my $scount = $#shape + 0; # We want less intervals than spaces

my $blockSizeR = int($lcount / $scount);
my $blockSize = $lcount / $scount;

my $c = $blockSize * $scount;
print "shapes: $scount shapes: $lcount blocks size:$blockSize :$c\n";

my %tally;

#for  (my $i = 0; $i++; $i==$#letters) {
for  (my $i = 0; $i<=$#letters; $i++) {
    # my $obs;
    # if ($i == 0 ||
    #     $i == $#letters) {
    #     $obs = 'yes';
    # }

    my $o = ($i/$blockSize);
    my $cell = 
    {
#         letter => $letters[$i],
#         observation => (($i+1) / $blockSize),
#        observation => $blockSize * $i,
#        observation => $i / $blockSize,
        floor => floor($o),
        ceil => ceil($o),
#           oi=> int $o, 
#o =>  $o, 
        };
    $tally{"$cell->{floor}:$cell->{ceil}"}++;

#    push(@distro, $cell);
#    push(@distro, sprintf "%.4f", $cell->{observation});
    
}

use POSIX qw(ceil floor);
use Data::Dumper;
print(Data::Dumper->Dump([\@distro, \%tally]));


