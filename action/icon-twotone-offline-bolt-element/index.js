import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOfflineBoltElement
 * @class IconTwotoneOfflineBoltElement
 * @extends {AoflElement}
 */
class IconTwotoneOfflineBoltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOfflineBoltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-offline-bolt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOfflineBoltElement.is, IconTwotoneOfflineBoltElement);

export default IconTwotoneOfflineBoltElement;
