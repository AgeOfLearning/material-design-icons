import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatTextdirectionRToLElement
 * @class IconRoundFormatTextdirectionRToLElement
 * @extends {AoflElement}
 */
class IconRoundFormatTextdirectionRToLElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatTextdirectionRToLElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-textdirection-r-to-l';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatTextdirectionRToLElement.is, IconRoundFormatTextdirectionRToLElement);

export default IconRoundFormatTextdirectionRToLElement;
