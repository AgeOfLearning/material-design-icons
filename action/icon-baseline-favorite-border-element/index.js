import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFavoriteBorderElement
 * @class IconBaselineFavoriteBorderElement
 * @extends {AoflElement}
 */
class IconBaselineFavoriteBorderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFavoriteBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-favorite-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFavoriteBorderElement.is, IconBaselineFavoriteBorderElement);

export default IconBaselineFavoriteBorderElement;
