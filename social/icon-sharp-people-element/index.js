import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPeopleElement
 * @class IconSharpPeopleElement
 * @extends {AoflElement}
 */
class IconSharpPeopleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPeopleElement.is, IconSharpPeopleElement);

export default IconSharpPeopleElement;
