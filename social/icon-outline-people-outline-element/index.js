import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePeopleOutlineElement
 * @class IconOutlinePeopleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlinePeopleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePeopleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-people-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePeopleOutlineElement.is, IconOutlinePeopleOutlineElement);

export default IconOutlinePeopleOutlineElement;
