import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeleteForeverElement
 * @class IconTwotoneDeleteForeverElement
 * @extends {AoflElement}
 */
class IconTwotoneDeleteForeverElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeleteForeverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-delete-forever';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeleteForeverElement.is, IconTwotoneDeleteForeverElement);

export default IconTwotoneDeleteForeverElement;
