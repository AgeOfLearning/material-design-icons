import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsRunElement
 * @class IconSharpDirectionsRunElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsRunElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsRunElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-run';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsRunElement.is, IconSharpDirectionsRunElement);

export default IconSharpDirectionsRunElement;
