import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsBoatElement
 * @class IconSharpDirectionsBoatElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsBoatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsBoatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-boat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsBoatElement.is, IconSharpDirectionsBoatElement);

export default IconSharpDirectionsBoatElement;
