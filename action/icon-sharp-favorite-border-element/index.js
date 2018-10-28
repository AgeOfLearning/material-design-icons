import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFavoriteBorderElement
 * @class IconSharpFavoriteBorderElement
 * @extends {AoflElement}
 */
class IconSharpFavoriteBorderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFavoriteBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-favorite-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFavoriteBorderElement.is, IconSharpFavoriteBorderElement);

export default IconSharpFavoriteBorderElement;
