import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrafficElement
 * @class IconTwotoneTrafficElement
 * @extends {AoflElement}
 */
class IconTwotoneTrafficElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrafficElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-traffic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrafficElement.is, IconTwotoneTrafficElement);

export default IconTwotoneTrafficElement;
