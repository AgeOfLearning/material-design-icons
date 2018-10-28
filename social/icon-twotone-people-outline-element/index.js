import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePeopleOutlineElement
 * @class IconTwotonePeopleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotonePeopleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePeopleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-people-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePeopleOutlineElement.is, IconTwotonePeopleOutlineElement);

export default IconTwotonePeopleOutlineElement;
