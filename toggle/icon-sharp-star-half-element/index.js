import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStarHalfElement
 * @class IconSharpStarHalfElement
 * @extends {AoflElement}
 */
class IconSharpStarHalfElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStarHalfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-star-half';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStarHalfElement.is, IconSharpStarHalfElement);

export default IconSharpStarHalfElement;
