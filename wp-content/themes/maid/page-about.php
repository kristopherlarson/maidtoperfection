<?php
/* 
====================
	TEMPLATE NAME: About
====================
*/
get_header();
?>
<?php get_template_part( 'templates/page', 'header' ); ?>
    <div id="primary" class="content-area">

        <main>

            <section class="welcome">

                <div class="row">
                    <div class="large-9 large-centered columns base-content">
                        <svg class="icon icon-heading">
                            <use xlink:href="#icon-dust-pan"/>
                        </svg>
						<?php get_template_part( 'templates/loop', 'page' ); ?>
                    </div>
                </div>

            </section>

			<?php get_template_part( 'panels/footer-discount' ) ?>

        </main>
    </div>
<?php get_footer(); ?>