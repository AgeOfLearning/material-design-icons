import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrendingDownElement
 * @class IconBaselineTrendingDownElement
 * @extends {AoflElement}
 */
class IconBaselineTrendingDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrendingDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-trending-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrendingDownElement.is, IconBaselineTrendingDownElement);

export default IconBaselineTrendingDownElement;
