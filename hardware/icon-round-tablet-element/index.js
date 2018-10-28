import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTabletElement
 * @class IconRoundTabletElement
 * @extends {AoflElement}
 */
class IconRoundTabletElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTabletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tablet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTabletElement.is, IconRoundTabletElement);

export default IconRoundTabletElement;
