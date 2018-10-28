import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccountBoxElement
 * @class IconOutlineAccountBoxElement
 * @extends {AoflElement}
 */
class IconOutlineAccountBoxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccountBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-account-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccountBoxElement.is, IconOutlineAccountBoxElement);

export default IconOutlineAccountBoxElement;
