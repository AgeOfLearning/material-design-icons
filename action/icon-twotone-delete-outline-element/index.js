import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeleteOutlineElement
 * @class IconTwotoneDeleteOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneDeleteOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeleteOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-delete-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeleteOutlineElement.is, IconTwotoneDeleteOutlineElement);

export default IconTwotoneDeleteOutlineElement;
