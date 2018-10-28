import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGridOffElement
 * @class IconRoundGridOffElement
 * @extends {AoflElement}
 */
class IconRoundGridOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGridOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-grid-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGridOffElement.is, IconRoundGridOffElement);

export default IconRoundGridOffElement;
