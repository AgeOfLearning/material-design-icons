import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatColorFillElement
 * @class IconOutlineFormatColorFillElement
 * @extends {AoflElement}
 */
class IconOutlineFormatColorFillElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatColorFillElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-color-fill';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatColorFillElement.is, IconOutlineFormatColorFillElement);

export default IconOutlineFormatColorFillElement;
