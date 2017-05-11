<?php
/* 
====================
	HEADER
====================
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <link href="<?php echo THEME_IMAGES; ?>/favicon.png" rel="icon" type="image/x-icon">

    <title><?php echo get_field( 'title_tag' ) ?></title>
    <meta name="description" content="<?php echo get_field( 'meta_tag' ) ?>">

    <meta name="google-site-verification" content="lxbxMEaA1HQs1B9Qt0wa_jks2dMwK13R2lwc75URIRM"/>

	<?php wp_head(); ?>

    <script type='text/javascript' charset='utf-8'>
        window.liveSiteAsyncInit = function () {
            LiveSite.init({
                id: 'WI-WP2DXIQWL9QMMLNVHY92',
                ui: false
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                p = (('https:' == d.location.protocol) ? 'https://' : 'http://'),
                r = Math.floor(new Date().getTime() / 1000000);
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = p + "www.vcita.com/assets/livesite.js?" + r;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'livesite-jssdk'));
    </script>

</head>

<body <?php body_class(); ?>>

<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-70289166-22', 'auto');
    ga('send', 'pageview');

</script>

<div id="main-container">

    <header id="masthead" class="site-header">
        <div class="row nav-row">
            <div class="large-12 columns">

                <div class="follow-us">
                    <div class="contact-us">
                        <a href="tel:1-435-817-3016">
                            <svg class="icon icon-contact">
                                <use xlink:href="#icon-cellphone"/>
                            </svg>
                            <p>435.817.3016</p>
                        </a>
                    </div>

                    <div class="header-social">
                        <a href="https://www.facebook.com/maid2perfectioncleaningservices/" target="_blank">
                            <svg class="icon icon-social">
                                <use xlink:href="#icon-facebook"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/maidtoperfectioncleaning/" target="_blank">
                            <svg class="icon icon-social">
                                <use xlink:href="#icon-pinterest"/>
                            </svg>
                        </a>
                        <a href="https://plus.google.com/109520639920322735044" target="_blank">
                            <svg class="icon icon-social">
                                <use xlink:href="#icon-googleplus"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="mobile-logo">
                    <a href="<?php echo get_home_url(); ?>">
                        <svg class="icon icon-heading">
                            <use xlink:href="#icon-logo"/>
                        </svg>
                    </a>
                </div>

                <nav class="main-nav" aria-label="Site Navigation" itemscope
                     itemtype="https://schema.org/SiteNavigationElement">
                    <button class="mobile-trigger" type="button">
                        <span class="visual-hide"><?php _e( 'Menu', 'amped-theme' ); ?></span>
                        <span class="mobile-trigger-box">
						<span class="mobile-trigger-inner"></span>
					</span>
                    </button>
					<?php get_template_part( 'templates/menu', 'nav' ); ?>
                </nav>

            </div>
        </div>
    </header>

    <div id="<?php echo is_front_page() ? 'home' : 'page' ?>-content" class="site-content">