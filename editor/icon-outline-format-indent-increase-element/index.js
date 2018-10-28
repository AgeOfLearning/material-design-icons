import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatIndentIncreaseElement
 * @class IconOutlineFormatIndentIncreaseElement
 * @extends {AoflElement}
 */
class IconOutlineFormatIndentIncreaseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatIndentIncreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-indent-increase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatIndentIncreaseElement.is, IconOutlineFormatIndentIncreaseElement);

export default IconOutlineFormatIndentIncreaseElement;
