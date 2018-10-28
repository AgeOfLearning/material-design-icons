import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRssFeedElement
 * @class IconSharpRssFeedElement
 * @extends {AoflElement}
 */
class IconSharpRssFeedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRssFeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-rss-feed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRssFeedElement.is, IconSharpRssFeedElement);

export default IconSharpRssFeedElement;
