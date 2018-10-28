import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalCafeElement
 * @class IconOutlineLocalCafeElement
 * @extends {AoflElement}
 */
class IconOutlineLocalCafeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalCafeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-cafe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalCafeElement.is, IconOutlineLocalCafeElement);

export default IconOutlineLocalCafeElement;
