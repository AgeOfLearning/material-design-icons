import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatQuoteElement
 * @class IconBaselineFormatQuoteElement
 * @extends {AoflElement}
 */
class IconBaselineFormatQuoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatQuoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-quote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatQuoteElement.is, IconBaselineFormatQuoteElement);

export default IconBaselineFormatQuoteElement;
