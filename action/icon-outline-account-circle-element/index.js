import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccountCircleElement
 * @class IconOutlineAccountCircleElement
 * @extends {AoflElement}
 */
class IconOutlineAccountCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccountCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-account-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccountCircleElement.is, IconOutlineAccountCircleElement);

export default IconOutlineAccountCircleElement;
