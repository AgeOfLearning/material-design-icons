import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDonutLargeElement
 * @class IconRoundDonutLargeElement
 * @extends {AoflElement}
 */
class IconRoundDonutLargeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDonutLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-donut-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDonutLargeElement.is, IconRoundDonutLargeElement);

export default IconRoundDonutLargeElement;
