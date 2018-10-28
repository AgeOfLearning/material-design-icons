import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatTextdirectionRToLElement
 * @class IconSharpFormatTextdirectionRToLElement
 * @extends {AoflElement}
 */
class IconSharpFormatTextdirectionRToLElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatTextdirectionRToLElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-textdirection-r-to-l';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatTextdirectionRToLElement.is, IconSharpFormatTextdirectionRToLElement);

export default IconSharpFormatTextdirectionRToLElement;
