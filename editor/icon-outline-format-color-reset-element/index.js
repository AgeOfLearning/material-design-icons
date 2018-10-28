import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatColorResetElement
 * @class IconOutlineFormatColorResetElement
 * @extends {AoflElement}
 */
class IconOutlineFormatColorResetElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatColorResetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-color-reset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatColorResetElement.is, IconOutlineFormatColorResetElement);

export default IconOutlineFormatColorResetElement;
