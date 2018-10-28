import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowDownwardElement
 * @class IconRoundArrowDownwardElement
 * @extends {AoflElement}
 */
class IconRoundArrowDownwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowDownwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-downward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowDownwardElement.is, IconRoundArrowDownwardElement);

export default IconRoundArrowDownwardElement;
