import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatPaintElement
 * @class IconRoundFormatPaintElement
 * @extends {AoflElement}
 */
class IconRoundFormatPaintElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatPaintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-paint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatPaintElement.is, IconRoundFormatPaintElement);

export default IconRoundFormatPaintElement;
