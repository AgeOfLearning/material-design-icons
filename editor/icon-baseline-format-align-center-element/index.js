import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatAlignCenterElement
 * @class IconBaselineFormatAlignCenterElement
 * @extends {AoflElement}
 */
class IconBaselineFormatAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatAlignCenterElement.is, IconBaselineFormatAlignCenterElement);

export default IconBaselineFormatAlignCenterElement;
