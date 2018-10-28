import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatAlignLeftElement
 * @class IconBaselineFormatAlignLeftElement
 * @extends {AoflElement}
 */
class IconBaselineFormatAlignLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatAlignLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-align-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatAlignLeftElement.is, IconBaselineFormatAlignLeftElement);

export default IconBaselineFormatAlignLeftElement;
