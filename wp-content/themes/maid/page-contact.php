<?php
/* 
====================
	TEMPLATE NAME: Contact
====================
*/
get_header();
?>
<?php get_template_part( 'templates/page', 'header' ); ?>
    <div id="primary" class="content-area contact-page">
        <main>

            <section class="welcome">
                <svg class="icon icon-heading">
                    <use xlink:href="#icon-sparkle"/>
                </svg>
            </section>

            <div class="row">
                <div class="medium-7 large-5 large-offset-2 columns base-content">
					<?php get_template_part( 'templates/form', 'contact' ); ?>
                </div>
                <aside class="medium-5 large-4 columns end base-content" role="complementary">
					<?php get_template_part( 'templates/loop', 'page' ); ?>
                </aside>
            </div>

            <section id="step-two" class="step-two reduced">

                <div class="row">
                    <div class="large-7 large-centered columns base-content">

                        <div class="call-boxes row">
                            <div class="large-6 columns">
                                <a href="https://live.vcita.com/site/8wq2qthyiavx9l0r/online-scheduling?service=cnzecu5njh4kb439&staff=oeovkfffjjngym33"
                                   target="_blank" class="livesite-schedule" data-service="cnzecu5njh4kb439"
                                   data-staff="oeovkfffjjngym33">
                                    <svg class="icon icon-schedule-me">
                                        <use xlink:href="#icon-schedule-call"/>
                                    </svg>
                                    <p><b>Still unsure about what you need?</b></p>
                                    <div class="box-wrapper">
                                        <h4>SCHEDULE A CALL</h4>
                                        <p>To get a quote straight from us</p>
                                    </div>
                                </a>
                            </div>

                            <div class="large-6 columns">
                                <a href="https://live.vcita.com/site/8wq2qthyiavx9l0r/online-scheduling" target="blank"
                                   class="livesite-schedule">
                                    <svg class="icon icon-schedule-me">
                                        <use xlink:href="#icon-calendar"/>
                                    </svg>
                                    <p><b>Know how long your cleaning is?</b></p>
                                    <div class="box-wrapper">
                                        <h4>SCHEDULE A CLEANING</h4>
                                        <p>Choose from our online calendar</p>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </main>
    </div>
<?php get_footer(); ?>