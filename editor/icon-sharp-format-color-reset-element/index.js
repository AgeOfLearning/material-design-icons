import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatColorResetElement
 * @class IconSharpFormatColorResetElement
 * @extends {AoflElement}
 */
class IconSharpFormatColorResetElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatColorResetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-color-reset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatColorResetElement.is, IconSharpFormatColorResetElement);

export default IconSharpFormatColorResetElement;
