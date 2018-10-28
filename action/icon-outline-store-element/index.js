import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStoreElement
 * @class IconOutlineStoreElement
 * @extends {AoflElement}
 */
class IconOutlineStoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStoreElement.is, IconOutlineStoreElement);

export default IconOutlineStoreElement;
