import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatUnderlinedElement
 * @class IconTwotoneFormatUnderlinedElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatUnderlinedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatUnderlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-underlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatUnderlinedElement.is, IconTwotoneFormatUnderlinedElement);

export default IconTwotoneFormatUnderlinedElement;
