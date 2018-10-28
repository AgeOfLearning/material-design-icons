import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatTextdirectionRToLElement
 * @class IconOutlineFormatTextdirectionRToLElement
 * @extends {AoflElement}
 */
class IconOutlineFormatTextdirectionRToLElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatTextdirectionRToLElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-textdirection-r-to-l';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatTextdirectionRToLElement.is, IconOutlineFormatTextdirectionRToLElement);

export default IconOutlineFormatTextdirectionRToLElement;
