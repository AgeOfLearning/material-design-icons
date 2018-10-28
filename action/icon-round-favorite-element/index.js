import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFavoriteElement
 * @class IconRoundFavoriteElement
 * @extends {AoflElement}
 */
class IconRoundFavoriteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFavoriteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-favorite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFavoriteElement.is, IconRoundFavoriteElement);

export default IconRoundFavoriteElement;
