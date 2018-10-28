import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowDropUpElement
 * @class IconRoundArrowDropUpElement
 * @extends {AoflElement}
 */
class IconRoundArrowDropUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowDropUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-drop-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowDropUpElement.is, IconRoundArrowDropUpElement);

export default IconRoundArrowDropUpElement;
