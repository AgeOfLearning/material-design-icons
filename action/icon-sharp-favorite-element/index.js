import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFavoriteElement
 * @class IconSharpFavoriteElement
 * @extends {AoflElement}
 */
class IconSharpFavoriteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFavoriteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-favorite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFavoriteElement.is, IconSharpFavoriteElement);

export default IconSharpFavoriteElement;
