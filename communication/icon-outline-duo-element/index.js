import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDuoElement
 * @class IconOutlineDuoElement
 * @extends {AoflElement}
 */
class IconOutlineDuoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDuoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-duo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDuoElement.is, IconOutlineDuoElement);

export default IconOutlineDuoElement;
