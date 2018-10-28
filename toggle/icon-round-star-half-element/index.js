import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStarHalfElement
 * @class IconRoundStarHalfElement
 * @extends {AoflElement}
 */
class IconRoundStarHalfElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStarHalfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-star-half';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStarHalfElement.is, IconRoundStarHalfElement);

export default IconRoundStarHalfElement;
