import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSdCardElement
 * @class IconSharpSdCardElement
 * @extends {AoflElement}
 */
class IconSharpSdCardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSdCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sd-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSdCardElement.is, IconSharpSdCardElement);

export default IconSharpSdCardElement;
