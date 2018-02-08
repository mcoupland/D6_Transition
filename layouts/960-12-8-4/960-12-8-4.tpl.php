<?php // $Id: 960-12-8-4.tpl.php,v 1.1.2.2 2010/07/20 19:06:04 merlinofchaos Exp $ ?>

<div class="container-12" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
    <div class="grid-8">
      <?php print $content['left']; ?>
    </div>
    <div class="grid-4">
      <?php print $content['right']; ?>
    </div>
</div>






























