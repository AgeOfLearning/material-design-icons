import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStarElement
 * @class IconRoundStarElement
 * @extends {AoflElement}
 */
class IconRoundStarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-star';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStarElement.is, IconRoundStarElement);

export default IconRoundStarElement;
