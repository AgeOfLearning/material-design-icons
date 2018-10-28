import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStoreElement
 * @class IconTwotoneStoreElement
 * @extends {AoflElement}
 */
class IconTwotoneStoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStoreElement.is, IconTwotoneStoreElement);

export default IconTwotoneStoreElement;
