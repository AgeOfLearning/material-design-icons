import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOfflineBoltElement
 * @class IconOutlineOfflineBoltElement
 * @extends {AoflElement}
 */
class IconOutlineOfflineBoltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOfflineBoltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-offline-bolt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOfflineBoltElement.is, IconOutlineOfflineBoltElement);

export default IconOutlineOfflineBoltElement;
