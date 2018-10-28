import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddCircleElement
 * @class IconOutlineAddCircleElement
 * @extends {AoflElement}
 */
class IconOutlineAddCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddCircleElement.is, IconOutlineAddCircleElement);

export default IconOutlineAddCircleElement;
