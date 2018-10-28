import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStarRateElement
 * @class IconSharpStarRateElement
 * @extends {AoflElement}
 */
class IconSharpStarRateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStarRateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-star-rate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStarRateElement.is, IconSharpStarRateElement);

export default IconSharpStarRateElement;
