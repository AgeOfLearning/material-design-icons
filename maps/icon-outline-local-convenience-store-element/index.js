import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalConvenienceStoreElement
 * @class IconOutlineLocalConvenienceStoreElement
 * @extends {AoflElement}
 */
class IconOutlineLocalConvenienceStoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalConvenienceStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-convenience-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalConvenienceStoreElement.is, IconOutlineLocalConvenienceStoreElement);

export default IconOutlineLocalConvenienceStoreElement;
