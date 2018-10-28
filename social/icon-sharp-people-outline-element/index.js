import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPeopleOutlineElement
 * @class IconSharpPeopleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpPeopleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPeopleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-people-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPeopleOutlineElement.is, IconSharpPeopleOutlineElement);

export default IconSharpPeopleOutlineElement;
