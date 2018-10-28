import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalConvenienceStoreElement
 * @class IconTwotoneLocalConvenienceStoreElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalConvenienceStoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalConvenienceStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-convenience-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalConvenienceStoreElement.is, IconTwotoneLocalConvenienceStoreElement);

export default IconTwotoneLocalConvenienceStoreElement;
