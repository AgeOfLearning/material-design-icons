import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalAtmElement
 * @class IconOutlineLocalAtmElement
 * @extends {AoflElement}
 */
class IconOutlineLocalAtmElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalAtmElement.is, IconOutlineLocalAtmElement);

export default IconOutlineLocalAtmElement;
