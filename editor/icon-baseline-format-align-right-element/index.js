import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatAlignRightElement
 * @class IconBaselineFormatAlignRightElement
 * @extends {AoflElement}
 */
class IconBaselineFormatAlignRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatAlignRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-align-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatAlignRightElement.is, IconBaselineFormatAlignRightElement);

export default IconBaselineFormatAlignRightElement;
