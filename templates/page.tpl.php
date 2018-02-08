<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=9" >
	<title><?php print $head_title; ?></title>
	<?php print $head; ?>
	<!--[if IE 6]><![endif]--> <!-- this prevents conditional comments below from blocking -->
	<?php print $styles; ?>
	<link href="<?php print $_SERVER["HTTPS"] ? https : http; ?>://cloud.webtype.com/css/d83a4f2c-b91f-4c69-8d2d-3745c7ffa244.css" rel="stylesheet" type="text/css" />
	<!--[if IE 9]>
		<link type="text/css" rel="stylesheet" media="all" href="/sites/all/themes/andrew_harper/css/ie9.css?N" />
	<![endif]-->
	<!--[if IE 7]>
		<link type="text/css" rel="stylesheet" media="all" href="/sites/all/themes/andrew_harper/css/ie7.css?N" />
	<![endif]-->
 	<!--[if IE 8]>
		<link type="text/css" rel="stylesheet" media="all" href="/sites/all/themes/andrew_harper/css/ie8.css?N" />
	<![endif]--> 
</head>
<body class="<?php print $classes; ?>">
<pre><?php print htmlentities(print_r($vars_data, 1)) ?></pre>
<div id="page" class="container-12">
	<div id="logo" class="container-12"><?php if ($logo): ?><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a><?php endif; ?></div>
	<div id="header" class="container-12"><?php print $header; ?></div>
	<div id="navigation" class="container-12"><?php print $navigation; ?></div>
	<div id="title" class="container-12"><?php if ($title): ?><h1 class="title"><?php print $title; ?></h1><?php endif; ?></div>
	<div id="mission" class="container-12"><?php if ($mission): ?><?php print $mission; ?><?php endif; ?></div>
    <div id="highlight" class="container-12"><?php print $highlight; ?></div>
	<div id="messages" class="container-12"><?php print $messages; ?></div>
	<div id="tabs" class="container-12 tabs"><?php if ($tabs): ?><?php print $tabs; ?><?php endif; ?></div>
	<div id="help" class="container-12"><?php print $help; ?></div>
	<div id="content-top" class="container-12"><?php print $content_top; ?></div>
	<div id="content-area" class="container-12"><?php print $content; ?></div>
	<div id="content-bottom" class="container-12"><?php print $content_bottom; ?></div>
	<div id="feed-icons" class="feed-icons"><?php if ($feed_icons): ?><?php print $feed_icons; ?><?php endif; ?></div>
	<div id="footer" class="container-12"><?php if ($footer): ?><?php print $footer; ?><?php endif; ?></div>
	<div id="footer-message" class="container-12"><?php if ($footer_message): ?><?php print $footer_message; ?><?php endif; ?></div>
</div>
<div id="page-closure" class="container-12"><?php print $page_closure; ?></div>
<div id="closure" class="container-12"><?php print $closure; ?></div>
<?php print $scripts; ?>
</body>
</html>
