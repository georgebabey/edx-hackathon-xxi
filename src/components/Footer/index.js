import React from "react";
import Img from 'gatsby-image'

// import SiteFooter  from  "@edx/frontend-component-footer";  Didn't work because of window somewhere in the includes
import { Hyperlink } from '@edx/paragon';
import './footer.scss';


class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  renderSiteLogo() {
    return (
      <Img fixed={this.props.data.siteLogo.childImageSharp.fixed} alt={`${this.props.siteName} logo`} />
    );
  }

  renderLinks(column) {
    const {
      header,
      links
    } = this.props.data['links_' + column];
    return (
      <React.Fragment>
        <h2>{header}</h2>
        <ul className="list-unstyled p-0 m-0">
          { links.map((link, idx) => (<li key={`link-${column}-${idx}`}><a href={link.url}>{link.text}</a></li>) ) }
        </ul>
      </React.Fragment>
    );
  }

  render() {
    const {
      siteName
    } = this.props;
    return (
      <footer
        role="contentinfo"
        aria-label="Page Footer"
        className="footer d-flex justify-content-center border-top py-3 px-4"
      >
        <div className="max-width-1180 d-grid">
          <div className="area-1">
            <Hyperlink destination="/" content={this.renderSiteLogo()} aria-label={`${siteName} Home`} />
          </div>
          <div className="area-2">
            {this.renderLinks(1)}
          </div>
          <div className="area-3">
            {this.renderLinks(2)}
          </div>
          <div className="area-4">
            {this.renderLinks(3)}
          </div>
          <div className="area-5">
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
};

export default SiteFooter;
