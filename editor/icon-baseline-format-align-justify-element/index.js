import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatAlignJustifyElement
 * @class IconBaselineFormatAlignJustifyElement
 * @extends {AoflElement}
 */
class IconBaselineFormatAlignJustifyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatAlignJustifyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-align-justify';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatAlignJustifyElement.is, IconBaselineFormatAlignJustifyElement);

export default IconBaselineFormatAlignJustifyElement;
