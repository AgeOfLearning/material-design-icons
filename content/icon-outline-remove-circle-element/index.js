import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveCircleElement
 * @class IconOutlineRemoveCircleElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveCircleElement.is, IconOutlineRemoveCircleElement);

export default IconOutlineRemoveCircleElement;
