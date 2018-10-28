import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRssFeedElement
 * @class IconOutlineRssFeedElement
 * @extends {AoflElement}
 */
class IconOutlineRssFeedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRssFeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-rss-feed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRssFeedElement.is, IconOutlineRssFeedElement);

export default IconOutlineRssFeedElement;
