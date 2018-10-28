import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatColorResetElement
 * @class IconTwotoneFormatColorResetElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatColorResetElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatColorResetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-color-reset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatColorResetElement.is, IconTwotoneFormatColorResetElement);

export default IconTwotoneFormatColorResetElement;
