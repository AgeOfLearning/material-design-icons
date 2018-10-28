import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsElement
 * @class IconSharpDirectionsElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsElement.is, IconSharpDirectionsElement);

export default IconSharpDirectionsElement;
