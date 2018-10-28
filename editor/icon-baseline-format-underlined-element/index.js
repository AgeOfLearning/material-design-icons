import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatUnderlinedElement
 * @class IconBaselineFormatUnderlinedElement
 * @extends {AoflElement}
 */
class IconBaselineFormatUnderlinedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatUnderlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-underlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatUnderlinedElement.is, IconBaselineFormatUnderlinedElement);

export default IconBaselineFormatUnderlinedElement;
