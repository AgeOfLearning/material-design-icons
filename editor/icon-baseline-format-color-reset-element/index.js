import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatColorResetElement
 * @class IconBaselineFormatColorResetElement
 * @extends {AoflElement}
 */
class IconBaselineFormatColorResetElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatColorResetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-color-reset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatColorResetElement.is, IconBaselineFormatColorResetElement);

export default IconBaselineFormatColorResetElement;
