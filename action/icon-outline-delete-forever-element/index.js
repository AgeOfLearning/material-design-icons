import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeleteForeverElement
 * @class IconOutlineDeleteForeverElement
 * @extends {AoflElement}
 */
class IconOutlineDeleteForeverElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeleteForeverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-delete-forever';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeleteForeverElement.is, IconOutlineDeleteForeverElement);

export default IconOutlineDeleteForeverElement;
