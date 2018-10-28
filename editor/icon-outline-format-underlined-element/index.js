import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatUnderlinedElement
 * @class IconOutlineFormatUnderlinedElement
 * @extends {AoflElement}
 */
class IconOutlineFormatUnderlinedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatUnderlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-underlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatUnderlinedElement.is, IconOutlineFormatUnderlinedElement);

export default IconOutlineFormatUnderlinedElement;
