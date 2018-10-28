import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatLineSpacingElement
 * @class IconBaselineFormatLineSpacingElement
 * @extends {AoflElement}
 */
class IconBaselineFormatLineSpacingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatLineSpacingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-line-spacing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatLineSpacingElement.is, IconBaselineFormatLineSpacingElement);

export default IconBaselineFormatLineSpacingElement;
