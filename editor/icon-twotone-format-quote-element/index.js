import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatQuoteElement
 * @class IconTwotoneFormatQuoteElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatQuoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatQuoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-quote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatQuoteElement.is, IconTwotoneFormatQuoteElement);

export default IconTwotoneFormatQuoteElement;
