import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrafficElement
 * @class IconOutlineTrafficElement
 * @extends {AoflElement}
 */
class IconOutlineTrafficElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrafficElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-traffic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrafficElement.is, IconOutlineTrafficElement);

export default IconOutlineTrafficElement;
