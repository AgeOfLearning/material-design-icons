import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonOutlineElement
 * @class IconOutlinePersonOutlineElement
 * @extends {AoflElement}
 */
class IconOutlinePersonOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonOutlineElement.is, IconOutlinePersonOutlineElement);

export default IconOutlinePersonOutlineElement;
