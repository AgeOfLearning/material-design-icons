import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCheckBoxOutlineBlankElement
 * @class IconTwotoneCheckBoxOutlineBlankElement
 * @extends {AoflElement}
 */
class IconTwotoneCheckBoxOutlineBlankElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCheckBoxOutlineBlankElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-check-box-outline-blank';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCheckBoxOutlineBlankElement.is, IconTwotoneCheckBoxOutlineBlankElement);

export default IconTwotoneCheckBoxOutlineBlankElement;
