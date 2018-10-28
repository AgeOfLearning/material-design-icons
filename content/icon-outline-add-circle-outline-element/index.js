import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddCircleOutlineElement
 * @class IconOutlineAddCircleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineAddCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddCircleOutlineElement.is, IconOutlineAddCircleOutlineElement);

export default IconOutlineAddCircleOutlineElement;
