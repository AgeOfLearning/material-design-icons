import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsTransitElement
 * @class IconSharpDirectionsTransitElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsTransitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsTransitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-transit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsTransitElement.is, IconSharpDirectionsTransitElement);

export default IconSharpDirectionsTransitElement;
