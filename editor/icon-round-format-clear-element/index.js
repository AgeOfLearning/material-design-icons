import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatClearElement
 * @class IconRoundFormatClearElement
 * @extends {AoflElement}
 */
class IconRoundFormatClearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatClearElement.is, IconRoundFormatClearElement);

export default IconRoundFormatClearElement;
