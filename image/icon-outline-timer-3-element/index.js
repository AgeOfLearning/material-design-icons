import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimer3Element
 * @class IconOutlineTimer3Element
 * @extends {AoflElement}
 */
class IconOutlineTimer3Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimer3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timer-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimer3Element.is, IconOutlineTimer3Element);

export default IconOutlineTimer3Element;
