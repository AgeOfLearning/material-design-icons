import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStarBorderElement
 * @class IconRoundStarBorderElement
 * @extends {AoflElement}
 */
class IconRoundStarBorderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStarBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-star-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStarBorderElement.is, IconRoundStarBorderElement);

export default IconRoundStarBorderElement;
