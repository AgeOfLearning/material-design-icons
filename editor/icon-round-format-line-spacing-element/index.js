import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatLineSpacingElement
 * @class IconRoundFormatLineSpacingElement
 * @extends {AoflElement}
 */
class IconRoundFormatLineSpacingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatLineSpacingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-line-spacing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatLineSpacingElement.is, IconRoundFormatLineSpacingElement);

export default IconRoundFormatLineSpacingElement;
