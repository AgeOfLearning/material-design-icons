import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStorageElement
 * @class IconSharpStorageElement
 * @extends {AoflElement}
 */
class IconSharpStorageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStorageElement.is, IconSharpStorageElement);

export default IconSharpStorageElement;
