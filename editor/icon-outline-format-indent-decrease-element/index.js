import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatIndentDecreaseElement
 * @class IconOutlineFormatIndentDecreaseElement
 * @extends {AoflElement}
 */
class IconOutlineFormatIndentDecreaseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatIndentDecreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-indent-decrease';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatIndentDecreaseElement.is, IconOutlineFormatIndentDecreaseElement);

export default IconOutlineFormatIndentDecreaseElement;
