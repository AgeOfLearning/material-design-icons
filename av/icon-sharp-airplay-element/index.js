import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirplayElement
 * @class IconSharpAirplayElement
 * @extends {AoflElement}
 */
class IconSharpAirplayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airplay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirplayElement.is, IconSharpAirplayElement);

export default IconSharpAirplayElement;
