import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRssFeedElement
 * @class IconTwotoneRssFeedElement
 * @extends {AoflElement}
 */
class IconTwotoneRssFeedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRssFeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rss-feed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRssFeedElement.is, IconTwotoneRssFeedElement);

export default IconTwotoneRssFeedElement;
