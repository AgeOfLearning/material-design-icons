import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStarBorderElement
 * @class IconSharpStarBorderElement
 * @extends {AoflElement}
 */
class IconSharpStarBorderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStarBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-star-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStarBorderElement.is, IconSharpStarBorderElement);

export default IconSharpStarBorderElement;
