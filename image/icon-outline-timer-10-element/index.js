import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimer10Element
 * @class IconOutlineTimer10Element
 * @extends {AoflElement}
 */
class IconOutlineTimer10Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimer10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timer-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimer10Element.is, IconOutlineTimer10Element);

export default IconOutlineTimer10Element;
