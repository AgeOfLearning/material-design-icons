import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatIndentIncreaseElement
 * @class IconBaselineFormatIndentIncreaseElement
 * @extends {AoflElement}
 */
class IconBaselineFormatIndentIncreaseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatIndentIncreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-indent-increase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatIndentIncreaseElement.is, IconBaselineFormatIndentIncreaseElement);

export default IconBaselineFormatIndentIncreaseElement;
