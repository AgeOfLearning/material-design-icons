import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFavoriteBorderElement
 * @class IconRoundFavoriteBorderElement
 * @extends {AoflElement}
 */
class IconRoundFavoriteBorderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFavoriteBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-favorite-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFavoriteBorderElement.is, IconRoundFavoriteBorderElement);

export default IconRoundFavoriteBorderElement;
