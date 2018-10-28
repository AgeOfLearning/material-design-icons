import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatColorFillElement
 * @class IconRoundFormatColorFillElement
 * @extends {AoflElement}
 */
class IconRoundFormatColorFillElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatColorFillElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-color-fill';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatColorFillElement.is, IconRoundFormatColorFillElement);

export default IconRoundFormatColorFillElement;
