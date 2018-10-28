import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTouchAppElement
 * @class IconOutlineTouchAppElement
 * @extends {AoflElement}
 */
class IconOutlineTouchAppElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTouchAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-touch-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTouchAppElement.is, IconOutlineTouchAppElement);

export default IconOutlineTouchAppElement;
