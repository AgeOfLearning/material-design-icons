import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatUnderlinedElement
 * @class IconSharpFormatUnderlinedElement
 * @extends {AoflElement}
 */
class IconSharpFormatUnderlinedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatUnderlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-underlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatUnderlinedElement.is, IconSharpFormatUnderlinedElement);

export default IconSharpFormatUnderlinedElement;
