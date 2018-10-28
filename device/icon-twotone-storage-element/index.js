import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStorageElement
 * @class IconTwotoneStorageElement
 * @extends {AoflElement}
 */
class IconTwotoneStorageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStorageElement.is, IconTwotoneStorageElement);

export default IconTwotoneStorageElement;
