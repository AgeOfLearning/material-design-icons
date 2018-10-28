import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRssFeedElement
 * @class IconBaselineRssFeedElement
 * @extends {AoflElement}
 */
class IconBaselineRssFeedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRssFeedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rss-feed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRssFeedElement.is, IconBaselineRssFeedElement);

export default IconBaselineRssFeedElement;
