
$(".banner").slide({ titCell:".hd li", mainCell:".bd ul", effect:"fold",  autoPlay:true, delayTime:700});

$("#nav1").slide({ type:"menu", titCell:".nLi", targetCell:".m-prot dl",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});

//$(".yis1").slide({titOnClassName:'cur',titCell: ".yist dl",mainCell: ".yis2", autoPlay: true,effect:"fold",});

$(".hotpro").slide({mainCell: ".hotpro1 ul", autoPlay: true,effect:"topMarquee",vis:8,interTime:90,trigger:"click"});

$(".honor").slide({titOnClassName:'cur',titCell: ".honot li",mainCell: ".honor2", autoPlay: true,effect:"fold",});
