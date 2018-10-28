import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveCircleOutlineElement
 * @class IconOutlineRemoveCircleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveCircleOutlineElement.is, IconOutlineRemoveCircleOutlineElement);

export default IconOutlineRemoveCircleOutlineElement;
