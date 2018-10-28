import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirplayElement
 * @class IconOutlineAirplayElement
 * @extends {AoflElement}
 */
class IconOutlineAirplayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airplay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirplayElement.is, IconOutlineAirplayElement);

export default IconOutlineAirplayElement;
