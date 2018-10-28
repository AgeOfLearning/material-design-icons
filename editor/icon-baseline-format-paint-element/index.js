import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatPaintElement
 * @class IconBaselineFormatPaintElement
 * @extends {AoflElement}
 */
class IconBaselineFormatPaintElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatPaintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-paint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatPaintElement.is, IconBaselineFormatPaintElement);

export default IconBaselineFormatPaintElement;
