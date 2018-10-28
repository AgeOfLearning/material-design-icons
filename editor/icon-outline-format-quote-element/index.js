import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatQuoteElement
 * @class IconOutlineFormatQuoteElement
 * @extends {AoflElement}
 */
class IconOutlineFormatQuoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatQuoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-quote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatQuoteElement.is, IconOutlineFormatQuoteElement);

export default IconOutlineFormatQuoteElement;
