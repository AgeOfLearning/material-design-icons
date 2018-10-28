import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatIndentDecreaseElement
 * @class IconRoundFormatIndentDecreaseElement
 * @extends {AoflElement}
 */
class IconRoundFormatIndentDecreaseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatIndentDecreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-indent-decrease';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatIndentDecreaseElement.is, IconRoundFormatIndentDecreaseElement);

export default IconRoundFormatIndentDecreaseElement;
