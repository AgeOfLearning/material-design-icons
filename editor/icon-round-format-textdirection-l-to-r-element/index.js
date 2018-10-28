import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatTextdirectionLToRElement
 * @class IconRoundFormatTextdirectionLToRElement
 * @extends {AoflElement}
 */
class IconRoundFormatTextdirectionLToRElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatTextdirectionLToRElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-textdirection-l-to-r';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatTextdirectionLToRElement.is, IconRoundFormatTextdirectionLToRElement);

export default IconRoundFormatTextdirectionLToRElement;
