import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatIndentDecreaseElement
 * @class IconBaselineFormatIndentDecreaseElement
 * @extends {AoflElement}
 */
class IconBaselineFormatIndentDecreaseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatIndentDecreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-indent-decrease';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatIndentDecreaseElement.is, IconBaselineFormatIndentDecreaseElement);

export default IconBaselineFormatIndentDecreaseElement;
