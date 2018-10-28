import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlightElement
 * @class IconTwotoneFlightElement
 * @extends {AoflElement}
 */
class IconTwotoneFlightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlightElement.is, IconTwotoneFlightElement);

export default IconTwotoneFlightElement;
