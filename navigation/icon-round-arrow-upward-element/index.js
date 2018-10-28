import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowUpwardElement
 * @class IconRoundArrowUpwardElement
 * @extends {AoflElement}
 */
class IconRoundArrowUpwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowUpwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-upward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowUpwardElement.is, IconRoundArrowUpwardElement);

export default IconRoundArrowUpwardElement;
