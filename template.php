<?php
// $Id: template.php,v 1.21 2009/08/12 04:25:15 johnalbin Exp $
include_once(drupal_get_path('theme', 'transition').'/includes/env_vars.include');
/**
 * Implementation of HOOK_theme().
 */
function transition_theme(&$existing, $type, $theme, $path) {
	$hooks = zen_theme($existing, $type, $theme, $path);
	/** 
	 * Add your theme hooks like this:
	 *
	 * $hooks['hook_name_here'] = array( // Details go here );
	 */
	return $hooks;
}

function transition_preprocess_page(&$vars, $hook) { 
}
