import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRoundedCornerElement
 * @class IconRoundRoundedCornerElement
 * @extends {AoflElement}
 */
class IconRoundRoundedCornerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRoundedCornerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rounded-corner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRoundedCornerElement.is, IconRoundRoundedCornerElement);

export default IconRoundRoundedCornerElement;
