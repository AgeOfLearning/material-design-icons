import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatQuoteElement
 * @class IconRoundFormatQuoteElement
 * @extends {AoflElement}
 */
class IconRoundFormatQuoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatQuoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-quote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatQuoteElement.is, IconRoundFormatQuoteElement);

export default IconRoundFormatQuoteElement;
