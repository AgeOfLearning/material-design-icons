import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRssFeedElement
 * @class IconRoundRssFeedElement
 * @extends {AoflElement}
 */
class IconRoundRssFeedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRssFeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rss-feed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRssFeedElement.is, IconRoundRssFeedElement);

export default IconRoundRssFeedElement;
