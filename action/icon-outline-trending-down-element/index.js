import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrendingDownElement
 * @class IconOutlineTrendingDownElement
 * @extends {AoflElement}
 */
class IconOutlineTrendingDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrendingDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-trending-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrendingDownElement.is, IconOutlineTrendingDownElement);

export default IconOutlineTrendingDownElement;
