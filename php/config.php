<?php
// MySQL database details
$conf['db_hostname'] = ''; // MySQL host name
$conf['db_username'] = ''; // MySQL username
$conf['db_password'] = ''; // MySQL password
$conf['db_name'] = ''; // MySQL database name
$conf['db_table_subscribers'] = 'subscribers'; // MySQL table to store emails
$conf['db_table_settings'] = 'settings'; // MySQL table to store emails


// Logo image
$conf['logo_file'] = 'images/logo.png';
$conf['logo_width'] = '252';
$conf['logo_height'] = '122';
$conf['logo_alt_text'] = 'Alt Stalker';


// Colours
$conf['colour_background'] = '#000000';
$conf['colour_block_background'] = '#af0000';
$conf['colour_font'] = '#000000';
$conf['colour_progressbar'] = '#078707';
$conf['colour_progressbar_background'] = '#000000';
$conf['colour_progressbar_font'] = '#FFFFFF';
$conf['colour_icons'] = '#af0000';
$conf['colour_submit'] = '#078707';
$conf['colour_hover'] = '#078707';


// Website name
$conf['website_name'] = 'AltStalker.com'; // Name of the Website as it appear on page and emails


// Countdown
$conf['countdown_activated'] = FALSE; // Show or hide the countdown with TRUE or FALSE
$conf['countdown_day'] = 0;
$conf['countdown_month'] = 0;
$conf['countdown_year'] = 0;
$conf['countdown_hour'] = 0; // (0-24)
$conf['countdown_min'] = 0; // (0-60)
$conf['countdown_sec'] = 0; // (0-60)
$conf['countdown_millisec'] = 0; // (0-1000)
$conf['countdown_timer'] = "30:00:00:00"; // dd:hh:mm:ss


// Progress bar
$conf['progressbar_activated'] = TRUE;
$conf['progressbar_percent'] = 10; // Percentage of the prgress bar


// Newsletter
$conf['newsletter_activated'] = TRUE;
$conf['newsletter_email'] = 'newsletter@altstalker.com';


// Social networks
$conf['facebook'] = ''; // Remove or leave empty if not used
$conf['twitter'] = 'https://twitter.com/altstalkersite'; // Remove or leave empty if not used
$conf['github'] = ''; // Remove or leave empty if not used
$conf['linkedin'] = ''; // Remove or leave empty if not used


// Donation Addresses
$conf['donation_activated'] = TRUE;
$conf['donation_title'] = 'All My Work Is Open Source But I Do Take Donations'; //Remove or Leave Empty if not used
$conf['BTC'] = '19Ncqupd3K2bUvNiAi6LQDLRBNpkwuGoYk'; // Remove or leave empty if not used
$conf['ETH'] = '0x82ad72Eb9c2E16e7Ac1ea49f3c9Bf0361Eaccd86'; // Remove or leave empty if not used
$conf['LTC'] = 'LSA1YdNFpmYf1C6HfB4TFzqAYpMyGWT7Cd'; // Remove or leave empty if not used
$conf['LBC'] = 'bYCGFG9seUJBY5i9QQxfmzLX6tk85j3986'; // Remove or leave empty if not used


// Google map
$conf['map_activated'] = FALSE;
$conf['map_api_key'] = ''; // API key from https://developers.google.com/maps/documentation/javascript/
$conf['map_latitude'] = 37.794689;
$conf['map_longitude'] = -122.407853;
$conf['map_markertitle'] = "San Francisco, Bay Area";
$conf['map_infowindow_title'] = '<b>San Francisco</b>'; // HTML formated, used in Google Map & Contact
$conf['map_infowindow_address'] = '<p><br /> San Francisco, CA</p>'; // HTML formated, used in Google Map & Contact

// Contact
$conf['contact_activated'] = FALSE; // Show or hide the contact form
$conf['phone_fax'] = '<p>+1 999 999 9999</P>' ;


// Email address used to send emails
$conf['email_address'] = 'admin@altstalker.com'; // Email address sending all the emails messages
$conf['email_from_name'] = 'Admin at Alt Stalker'; // Email from


// About
$conf['about_activated'] = TRUE; // Show or hide the about page with TRUE or FALSE


// Google analytics
 $conf['google_analytics'] = ''; //.enter the Google Analytics identification UA-XXXX-Y, leave it empty or remove this line if you do not want the use it


// Admin access
$conf['admin_username'] = ''; // Administrator username
$conf['admin_password'] = ''; // Administrator password
$conf['admin_cookie'] = ''; // Administrator cookie identification


// Admin pagination
$conf['rows_per_page'] = '100'; // Number of rows per page
$conf['show_page_numbers'] = TRUE; // Hide / show page numbers button
$conf['show_prev_next'] = TRUE; // Hide / show previous and next button


// Language used in this installation
$conf['current_language'] = 'en'; // Select a language in the /languages/ directory
// Edit the language file in the /languages/ folder to adjust content to your specific needs


// activate the multilingual functionality
$conf['multilingual'] = FALSE; // Use TRUE to activate the multiligual functionality, use FALSE to deactivate


// IF YOU DO NOTE USE THE MULTILINGUAL FUNCTIONALITY you can stop editing here.


// adress of the pages for all the available languages
$language = array (
	'en' => 'http://localhost', // repeat for all the needed languages
	'fr' => 'http://localhost/fr/',
);


// 2 characters code list of all languages
$lang_code = array (
	'ab' => 'Abkhazian',
	'af' => 'Afrikaans',
	'an' => 'Aragonese',
	'ar' => 'Arabic',
	'as' => 'Assamese',
	'az' => 'Azerbaijani',
	'be' => 'Belarusian',
	'bg' => 'Bulgarian',
	'bn' => 'Bengali',
	'bo' => 'Tibetan',
	'br' => 'Breton',
	'bs' => 'Bosnian',
	'ca' => 'Catalan / Valencian',
	'ce' => 'Chechen',
	'co' => 'Corsican',
	'cs' => 'Czech',
	'cu' => 'Church Slavic',
	'cy' => 'Welsh',
	'da' => 'Danish',
	'de' => 'German',
	'el' => 'Greek',
	'en' => 'English',
	'eo' => 'Esperanto',
	'es' => 'Spanish / Castilian',
	'et' => 'Estonian',
	'eu' => 'Basque',
	'fa' => 'Persian',
	'fi' => 'Finnish',
	'fj' => 'Fijian',
	'fo' => 'Faroese',
	'fr' => 'French',
	'fy' => 'Western Frisian',
	'ga' => 'Irish',
	'gd' => 'Gaelic / Scottish Gaelic',
	'gl' => 'Galician',
	'gv' => 'Manx',
	'he' => 'Hebrew',
	'hi' => 'Hindi',
	'hr' => 'Croatian',
	'ht' => 'Haitian; Haitian Creole',
	'hu' => 'Hungarian',
	'hy' => 'Armenian',
	'id' => 'Indonesian',
	'is' => 'Icelandic',
	'it' => 'Italian',
	'ja' => 'Japanese',
	'jv' => 'Javanese',
	'ka' => 'Georgian',
	'kg' => 'Kongo',
	'ko' => 'Korean',
	'ku' => 'Kurdish',
	'kw' => 'Cornish',
	'ky' => 'Kirghiz',
	'la' => 'Latin',
	'lb' => 'Luxembourgish Letzeburgesch',
	'li' => 'Limburgan Limburger Limburgish',
	'ln' => 'Lingala',
	'lt' => 'Lithuanian',
	'lv' => 'Latvian',
	'mg' => 'Malagasy',
	'mk' => 'Macedonian',
	'mn' => 'Mongolian',
	'mo' => 'Moldavian',
	'ms' => 'Malay',
	'mt' => 'Maltese',
	'my' => 'Burmese',
	'nb' => 'Norwegian (BokmÃ¥l)',
	'ne' => 'Nepali',
	'nl' => 'Dutch',
	'nn' => 'Norwegian (Nynorsk)',
	'no' => 'Norwegian',
	'oc' => 'Occitan (post 1500); ProvenÃ§al',
	'pl' => 'Polish',
	'pt' => 'Portuguese',
	'rm' => 'Raeto-Romance',
	'ro' => 'Romanian',
	'ru' => 'Russian',
	'sc' => 'Sardinian',
	'se' => 'Northern Sami',
	'sk' => 'Slovak',
	'sl' => 'Slovenian',
	'so' => 'Somali',
	'sq' => 'Albanian',
	'sr' => 'Serbian',
	'sv' => 'Swedish',
	'sw' => 'Swahili',
	'tk' => 'Turkmen',
	'tr' => 'Turkish',
	'ty' => 'Tahitian',
	'uk' => 'Ukrainian',
	'ur' => 'Urdu',
	'uz' => 'Uzbek',
	'vi' => 'Vietnamese',
	'vo' => 'Volapuk',
	'yi' => 'Yiddish',
	'zh' => 'Chinese',
);
