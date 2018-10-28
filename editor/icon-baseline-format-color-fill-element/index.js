import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatColorFillElement
 * @class IconBaselineFormatColorFillElement
 * @extends {AoflElement}
 */
class IconBaselineFormatColorFillElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatColorFillElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-color-fill';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatColorFillElement.is, IconBaselineFormatColorFillElement);

export default IconBaselineFormatColorFillElement;
