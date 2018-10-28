import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStorageElement
 * @class IconOutlineStorageElement
 * @extends {AoflElement}
 */
class IconOutlineStorageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStorageElement.is, IconOutlineStorageElement);

export default IconOutlineStorageElement;
