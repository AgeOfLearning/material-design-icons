import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalConvenienceStoreElement
 * @class IconSharpLocalConvenienceStoreElement
 * @extends {AoflElement}
 */
class IconSharpLocalConvenienceStoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalConvenienceStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-convenience-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalConvenienceStoreElement.is, IconSharpLocalConvenienceStoreElement);

export default IconSharpLocalConvenienceStoreElement;
