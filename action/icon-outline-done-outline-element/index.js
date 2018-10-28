import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDoneOutlineElement
 * @class IconOutlineDoneOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineDoneOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDoneOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-done-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDoneOutlineElement.is, IconOutlineDoneOutlineElement);

export default IconOutlineDoneOutlineElement;
