<?php
/* 
====================
	FOOTER
====================
*/
?>
</div> <!-- /.site-content -->

</div><!-- /#main-container -->


<footer class="footer">

    <div class="kitchen-floor background-cover lazyload"
         data-bgset="<?php echo THEME_IMAGES; ?>footer/kitchen-floor-background.png"></div>

    <div class="flex-outer">
        <div class="left">
            <div class="address-row">
                <div class="address-wrap-top">
                    <p><b>Billing</b> <br/>
                        250 N Red Cliffs Dr 4B#406<br/>
                        St George, UT 84790</p>
                </div>
                <div class="address-wrap">
                    <p><b>Physical</b> <br/>
                        596 E Tabernacle St<br/>
                        St George, UT 84770</p>
                    <br/>
					<?php //<a href="tel:1-435-817-3016"><b>435.817.3016</b></a> ?>
                </div>
            </div>


            <h6 class="copyright">
                &copy; <?php echo date( 'Y' ); ?>
                <a href="<?php echo esc_url( home_url() ); ?>" rel="bookmark">
					<?php bloginfo( 'name' ); ?>
                </a>
                <span class="rights-reserved"><?php _e( 'All Rights Reserved', 'amped-theme' ); ?></span> | <a
                        href="/privacy-policy/">Privacy Policy</a>
            </h6>
        </div>
        <div class="center">
			<?php get_template_part( 'images/svg-includes/logo-mop-swipe-svg' ) ?>
        </div>
        <div class="right">
            <ul>
                <li><a href="/about/">About</a></li>
                <li><a href="/house-cleaning/">House Cleaning</a></li>
                <li><a href="/commercial-cleaning/">Commercial Cleaning</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>

            <div class="footer-social">
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

            <p><a href="https://tenthmusedesign.com" target="_blank" rel="nofollow">Inspired By Tenth Muse Design</a>
            </p>
            <div class="footer-nav">
				<?php get_template_part( 'templates/menu', 'footer' ); ?>
            </div>
        </div>
    </div>

</footer>

<?php wp_footer(); ?>

<?php include_once( 'images/svg/dist/svg-master.svg' ); ?>

</body>
</html>
