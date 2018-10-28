import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrendingDownElement
 * @class IconTwotoneTrendingDownElement
 * @extends {AoflElement}
 */
class IconTwotoneTrendingDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrendingDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-trending-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrendingDownElement.is, IconTwotoneTrendingDownElement);

export default IconTwotoneTrendingDownElement;
