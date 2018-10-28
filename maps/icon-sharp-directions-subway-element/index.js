import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsSubwayElement
 * @class IconSharpDirectionsSubwayElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsSubwayElement.is, IconSharpDirectionsSubwayElement);

export default IconSharpDirectionsSubwayElement;
