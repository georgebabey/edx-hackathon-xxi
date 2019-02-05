import React from "react";
// import SiteFooter  from  "@edx/frontend-component-footer";
import { Hyperlink, Icon } from '@edx/paragon';
// import './styles.scss';

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    this.props.handleAllTrackEvents(eventName, properties);
  }

  renderSiteLogo() {
    return (
      <img src={this.props.siteLogo} alt={`${this.props.siteName} logo`} />
    );
  }

  renderMarketingSiteUrl(path) {
    return `${this.props.marketingSiteBaseUrl}${path}`;
  }

  renderSocialLinks() {
    const {
      siteName,
      showSocialLinks,
      facebookUrl,
      twitterUrl,
      youTubeUrl,
      linkedInUrl,
      googlePlusUrl,
      redditUrl,
    } = this.props;
    let socialLinks = null;
    if (showSocialLinks) {
      socialLinks = (
        <ul
          className="d-flex flex-row justify-content-between list-unstyled max-width-222 p-0 mb-4"
        >
          {/* TODO: Use Paragon HyperLink with Icon. */}
          {/*  Would need to add rel to paragon if we still need it. */}
          <li>
            <a
              href={facebookUrl}
              title="Facebook"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-facebook-square', 'fa-2x']} screenReaderText={`Like ${siteName} on Facebook`} />
            </a>
          </li>


          <li>
            <a
              href={twitterUrl}
              title="Twitter"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-twitter-square', 'fa-2x']} screenReaderText={`Follow ${siteName} on Twitter`} />
            </a>
          </li>
          <li>
            <a
              href={youTubeUrl}
              title="Youtube"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-youtube-square', 'fa-2x']} screenReaderText={`Subscribe to the ${siteName} YouTube channel`} />
            </a>
          </li>
          <li>
            <a
              href={linkedInUrl}
              title="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-linkedin-square', 'fa-2x']} screenReaderText={`Follow ${siteName} on LinkedIn`} />
            </a>
          </li>
          <li>
            <a
              href={googlePlusUrl}
              title="Google+"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-google-plus-square', 'fa-2x']} screenReaderText={`Follow ${siteName} on Google+`} />
            </a>
          </li>
          <li>
            <a
              href={redditUrl}
              title="Reddit"
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon className={['fa', 'fa-reddit-square', 'fa-2x']} screenReaderText={`Subscribe to the ${siteName} subreddit`} />
            </a>
          </li>
        </ul>
      );
    }
    return socialLinks;
  }

  renderMobileLinks() {
    const {
      siteName,
      showMobileLinks,
      appleAppStoreUrl,
      googlePlayUrl,
    } = this.props;
    let mobileLinks = null;
    if (showMobileLinks) {
      mobileLinks = (
        <ul className="d-flex flex-row justify-content-between list-unstyled max-width-264 p-0 mb-5">
          <li>
            <a href={appleAppStoreUrl} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={`Download the ${siteName} mobile app from the Apple App Store`}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/app_store_badge_135x40.d0558d910630.svg"
              />
            </a>
          </li>
          <li>
            <a href={googlePlayUrl} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={`Download the ${siteName} mobile app from Google Play`}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/google_play_badge_45.6ea466e328da.png"
              />
            </a>
          </li>
        </ul>
      );
    }
    return mobileLinks;
  }

  render() {
    const {
      siteName,
      openSourceUrl,
      termsOfServiceUrl,
      privacyPolicyUrl,
      contactUrl,
      supportUrl,
    } = this.props;
    return (
      <footer
        role="contentinfo"
        aria-label="Page Footer"
        className="footer d-flex justify-content-center border-top py-3 px-4"
      >
        <div className="max-width-1180 d-grid">
          <div className="area-1">
            <Hyperlink destination={this.renderMarketingSiteUrl('/')} content={this.renderSiteLogo()} aria-label={`${siteName} Home`} />
          </div>
          <div className="area-2">
            <h2>{siteName}</h2>
            <ul className="list-unstyled p-0 m-0">
              <li><a href={this.renderMarketingSiteUrl('/about-us')}>About</a></li>
              <li><a href={this.renderMarketingSiteUrl('/enterprise')}>{siteName} for Business</a></li>
              <li><a href={this.renderMarketingSiteUrl('/affiliate-program')}>Affiliates</a></li>
              <li><a href={openSourceUrl}>Open {siteName}</a></li>
              <li><a href={this.renderMarketingSiteUrl('/careers')}>Careers</a></li>
              <li><a href={this.renderMarketingSiteUrl('/news-announcements')}>News</a></li>
            </ul>
          </div>
          <div className="area-3">
            <h2>Legal</h2>
            <ul className="list-unstyled p-0 m-0">
              <li><a href={termsOfServiceUrl}>Terms of Service & Honor Code</a></li>
              <li><a href={privacyPolicyUrl}>Privacy Policy</a></li>
              <li><a href={this.renderMarketingSiteUrl('/accessibility')}>Accessibility Policy</a></li>
              <li><a href={this.renderMarketingSiteUrl('/trademarks')}>Trademark Policy</a></li>
              <li><a href={this.renderMarketingSiteUrl('/sitemap')}>Sitemap</a></li>
            </ul>
          </div>
          <div className="area-4">
            <h2>Connect</h2>
            <ul className="list-unstyled p-0 m-0">
              <li><a href={this.renderMarketingSiteUrl('/blog')}>Blog</a></li>
              <li><a href={contactUrl}>Contact Us</a></li>
              <li><a href={supportUrl}>Help Center</a></li>
              <li><a href={this.renderMarketingSiteUrl('/media-kit')}>Media Kit</a></li>
              <li><a href={this.renderMarketingSiteUrl('/donate')}>Donate</a></li>
            </ul>
          </div>
          <div className="area-5">
            {this.renderSocialLinks()}
            {this.renderMobileLinks()}
            <p>
              © 2012–{(new Date().getFullYear())} {siteName} Inc.
              <br />
              EdX, Open edX, and MicroMasters are registered trademarks of edX Inc.
              | 粤ICP备17044299号-2
            </p>
          </div>
        </div>
      </footer>
    );
  }
  

  // return (
  //   // <SiteFooter
  //   //   siteName="edX"
  //   //   siteLogo={FooterLogo}
  //   //   marketingSiteBaseUrl="https://www.example.com"
  //   //   supportUrl="https://www.example.com/support"
  //   //   contactUrl="https://www.example.com/contact"
  //   //   openSourceUrl="https://www.example.com/open"
  //   //   termsOfServiceUrl="https://www.example.com/terms-of-service"
  //   //   privacyPolicyUrl="https://www.example.com/privacy-policy"
  //   //   facebookUrl="https://www.facebook.com"
  //   //   twitterUrl="https://www.twitter.com"
  //   //   youTubeUrl="https://www.youtube.com"
  //   //   linkedInUrl="https://www.linkedin.com"
  //   //   googlePlusUrl="https://plus.google.com"
  //   //   redditUrl="https://reddit.com"
  //   //   appleAppStoreUrl="https://store.apple.com"
  //   //   googlePlayUrl="https://play.google.com"
  //   // >
  //   // </SiteFooter>
  //   <div></div>
  // );
};

const Footer = props => {
  console.log('gb' +  JSON.stringify(props));
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <SiteFooter {...data} />;
};

export default Footer;
