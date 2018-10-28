import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOfflineBoltElement
 * @class IconSharpOfflineBoltElement
 * @extends {AoflElement}
 */
class IconSharpOfflineBoltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOfflineBoltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-offline-bolt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOfflineBoltElement.is, IconSharpOfflineBoltElement);

export default IconSharpOfflineBoltElement;
