import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatBoldElement
 * @class IconRoundFormatBoldElement
 * @extends {AoflElement}
 */
class IconRoundFormatBoldElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatBoldElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-bold';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatBoldElement.is, IconRoundFormatBoldElement);

export default IconRoundFormatBoldElement;
