import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStoreElement
 * @class IconSharpStoreElement
 * @extends {AoflElement}
 */
class IconSharpStoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStoreElement.is, IconSharpStoreElement);

export default IconSharpStoreElement;
