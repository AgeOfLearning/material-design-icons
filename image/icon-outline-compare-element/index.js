import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCompareElement
 * @class IconOutlineCompareElement
 * @extends {AoflElement}
 */
class IconOutlineCompareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCompareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-compare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCompareElement.is, IconOutlineCompareElement);

export default IconOutlineCompareElement;
