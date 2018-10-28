import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWorkOutlineElement
 * @class IconOutlineWorkOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineWorkOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWorkOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-work-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWorkOutlineElement.is, IconOutlineWorkOutlineElement);

export default IconOutlineWorkOutlineElement;
