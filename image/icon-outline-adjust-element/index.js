import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAdjustElement
 * @class IconOutlineAdjustElement
 * @extends {AoflElement}
 */
class IconOutlineAdjustElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAdjustElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-adjust';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAdjustElement.is, IconOutlineAdjustElement);

export default IconOutlineAdjustElement;
