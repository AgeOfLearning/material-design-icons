import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMailOutlineElement
 * @class IconRoundMailOutlineElement
 * @extends {AoflElement}
 */
class IconRoundMailOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMailOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mail-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMailOutlineElement.is, IconRoundMailOutlineElement);

export default IconRoundMailOutlineElement;
