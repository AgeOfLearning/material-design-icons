import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatColorResetElement
 * @class IconRoundFormatColorResetElement
 * @extends {AoflElement}
 */
class IconRoundFormatColorResetElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatColorResetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-color-reset';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatColorResetElement.is, IconRoundFormatColorResetElement);

export default IconRoundFormatColorResetElement;
