import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatQuoteElement
 * @class IconSharpFormatQuoteElement
 * @extends {AoflElement}
 */
class IconSharpFormatQuoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatQuoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-quote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatQuoteElement.is, IconSharpFormatQuoteElement);

export default IconSharpFormatQuoteElement;
