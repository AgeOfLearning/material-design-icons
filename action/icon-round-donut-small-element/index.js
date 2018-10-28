import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDonutSmallElement
 * @class IconRoundDonutSmallElement
 * @extends {AoflElement}
 */
class IconRoundDonutSmallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDonutSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-donut-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDonutSmallElement.is, IconRoundDonutSmallElement);

export default IconRoundDonutSmallElement;
