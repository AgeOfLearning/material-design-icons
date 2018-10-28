import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatTextdirectionRToLElement
 * @class IconTwotoneFormatTextdirectionRToLElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatTextdirectionRToLElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatTextdirectionRToLElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-textdirection-r-to-l';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatTextdirectionRToLElement.is, IconTwotoneFormatTextdirectionRToLElement);

export default IconTwotoneFormatTextdirectionRToLElement;
