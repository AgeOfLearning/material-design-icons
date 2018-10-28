import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsCarElement
 * @class IconSharpDirectionsCarElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsCarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsCarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-car';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsCarElement.is, IconSharpDirectionsCarElement);

export default IconSharpDirectionsCarElement;
