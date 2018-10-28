import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirplayElement
 * @class IconTwotoneAirplayElement
 * @extends {AoflElement}
 */
class IconTwotoneAirplayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airplay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirplayElement.is, IconTwotoneAirplayElement);

export default IconTwotoneAirplayElement;
