import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCompareArrowsElement
 * @class IconOutlineCompareArrowsElement
 * @extends {AoflElement}
 */
class IconOutlineCompareArrowsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCompareArrowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-compare-arrows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCompareArrowsElement.is, IconOutlineCompareArrowsElement);

export default IconOutlineCompareArrowsElement;
